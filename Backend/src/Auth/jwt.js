const jwt = require('jsonwebtoken');
const { readDB } = require("../db/mongoOperations");
const { studentsSchema, professorsSchema } = require('../db/schema'); // <-- use lowercase

function loginRoute(req, res) {
    console.log(req.body)
    console.log(`Recieved request to login with Username: ${req.body.Username} and Password: ${req.body.Password} and Institution: ${req.body.Institution} and LoginType: ${req.body.LoginType}`)

    const { Username, Password, Institution, LoginType } = req.body;

    const requiredFields = ['LoginType', 'Username', 'Password', 'Institution'];

    for (const field of requiredFields) {
        if (!req.body[field] || req.body[field].trim() === '') {
            return res.json({
                success: false,
                message: `Login failed, ${field} not received or empty!`
            });
        }
    }

    if (!["Students", "Professors"].includes(LoginType)) {
        res.json({
            success: false,
            message: `Login failed, invalid Login Type ${LoginType}, it should be either Students or Professors`
        })
        return;
    }

    // Use fixed collection names and correct schema
    let collectionName = (LoginType === "Students") ? "students" : "professors";
    let SchemaToBeUsed = (LoginType === "Students") ? studentsSchema : professorsSchema;

    // Add Institution to the query to filter by institution
    const query = { Username, Password, Institution };

    readDB(LoginType, collectionName, query, SchemaToBeUsed).then((result) => {
        if (result.length === 1) {
            const payload = {
                Username: Username,
                Password: Password,
                LoginType: LoginType,
                Institution: Institution,
                _id: result[0]._id,
                DB: result[0]
            }

            console.log("Payload : ")
            console.log(payload);
            const secretKey = process.env.JWT_SECRET_KEY;
            const token = jwt.sign(payload, secretKey);

            console.log('Generated Token:', token);
            res.status(200).cookie(`token`, token, {
                sameSite: 'none',
                secure: true, // Set to true to ensure the cookie is only sent over HTTPS
            }).json({
                success: true,
                message: "Login Successful",
            })

            return;

        } else {
            res.json({
                success: false,
                message: "Login failed, invalid credentials"
            })
            return;
        }
    }).catch((err) => {
        console.log(err);
        res.json({
            success: false,
            message: `Login failed, Error while reading ${LoginType} DB`
        })
        return;
    })
}

function logoutRoute(req, res) {
    console.log("Recieved request to logout")
    console.log(req.cookies)
    res.clearCookie('token').json({
        success: true,
        message: "Logout Successful"
    })
}

function getProfileRoute(req, res) {
    console.log("Recieved request to get profile")
    console.log(req.decoded)
    if(req.decoded.LoginType == "Professors"){
        res.json({
            success: true,
            message: "Profile fetched successfully",
            profile: {
                Name : req.decoded.DB.Name,
                Username : req.decoded.DB.Username,
                Institution : req.decoded.Institution,
            }
        })
        return;
    }
    else if(req.decoded.LoginType == "Students"){
        res.json({
            success: true,
            message: "Profile fetched successfully",
            profile: {
                Batch : req.decoded.DB.Batch,
                Name : req.decoded.DB.Name,
                Username : req.decoded.DB.Username,
                Year : req.decoded.DB.Year,
                Institution : req.decoded.Institution,
            }
        })
        return;
    }
}

module.exports = { loginRoute, logoutRoute, getProfileRoute }