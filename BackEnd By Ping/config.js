const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://valpo:MbV80QsSvDl7Cypi@cluster0.n06qh.mongodb.net";
const client = new MongoClient(uri);

module.exports = client;