const { v4: uuidv4 } = require('uuid');

module.exports = {
  jwtSecret: uuidv4(), // Generates a random UUID string
  mongoURI: 'mongodb+srv://bhanu09:kaluva@cluster0.gfose8t.mongodb.net/yourDatabaseName?retryWrites=true&w=majority'
};
