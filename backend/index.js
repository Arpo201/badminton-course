const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongooose = require('mongoose')
const schema = require('./schema/schema')



const app = express();


//set up mongoDB
mongooose.connect('mongodb+srv://admin:reverse121254@cluster0.rrnkc.mongodb.net/test');

mongooose.connection.once('open', () => {
   console.log('connected to MongoDB');
});

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql:true
}));
 

 
 
app.listen(process.env.PORT || 3000, () => {
   console.log('Listening on port 3000');
});