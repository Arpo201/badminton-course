const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongooose = require('mongoose')
const schema = require('./schema/schema')
require('dotenv').config()



const app = express();

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql:true
}));
 
//set up mongoDB
mongooose.connect(process.env.mongoURI);

mongooose.connection.once('open', () => {
   console.log('connected to MongoDB');
});
 
 
app.listen(process.env.PORT || 3000, () => {
   console.log('Listening on port 3000');
});