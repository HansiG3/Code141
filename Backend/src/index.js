const dotenv = require("dotenv");
dotenv.config();

const { app } = require("./app");
const { connectDB } = require("./db/mongoOperations");

// Auth routes
const { loginRoute, logoutRoute, getProfileRoute } = require("./Auth/jwt");
const { ValidateToken } = require("./Middlewares/Auth");


const path = require("path");
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});

// ---------------- Routes ---------------- //

// Auth
app.post("/login", loginRoute);                     // login user and set JWT
app.delete("/logout", ValidateToken, logoutRoute);  // logout and clear JWT
app.get("/getProfile", ValidateToken, getProfileRoute); // fetch profile


// Serve React build (must be last)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
