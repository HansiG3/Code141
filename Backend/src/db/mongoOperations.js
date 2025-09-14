const mongoose = require('mongoose');
let connections = {};

async function connectDB() {
  try {
    const databaseNames = ['Colleges', 'Professors', 'Students'];

    for (let dbName of databaseNames) {
      // force IPv4 instead of localhost (::1)
      const uri = `mongodb://127.0.0.1:27017/${dbName}`;
      const connection = await mongoose.createConnection(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      connections[dbName] = connection;
      console.log(`Connected to ${dbName} database successfully!`);
    }
  } catch (error) {
    console.error('Error connecting to the databases:', error);
  }
}

async function writeDB(databaseName, collectionName, data, schema) {
  const thisModel = connections[databaseName].model(collectionName, schema, collectionName);
  return await thisModel.create(data);
}

async function readDB(databaseName, collectionName, query, schema, projection = {}) {
  const thisModel = connections[databaseName].model(collectionName, schema, collectionName);
  const data = await thisModel.find(query, projection);
  return data.map(obj => obj._doc); // return plain objects
}

async function checkIfExists(databaseName, collectionName, query, schema) {
  const thisModel = connections[databaseName].model(collectionName, schema, collectionName);
  return await thisModel.exists(query);
}

async function updateDB(databaseName, collectionName, findQuery, updateQuery, schema) {
  const thisModel = connections[databaseName].model(collectionName, schema, collectionName);
  return await thisModel.updateOne(findQuery, updateQuery);
}

module.exports = { connectDB, writeDB, readDB, updateDB, checkIfExists };
