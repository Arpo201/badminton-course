const express = require("express")
const cors = require("cors")
const path = require("path")
const graphql = require("graphql")
const { graphqlExpress, ApolloServer } = require('apollo-server-express')
const schema = require("./query.js")
const app = express()
const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")
const mongoose = require("mongoose")


const server = new ApolloServer({ typeDefs, resolvers });
const fun = async ()=>{
    await server.start()
    server.applyMiddleware({ app });
    await mongoose.connect("mongodb+srv://valpo:MbV80QsSvDl7Cypi@cluster0.n06qh.mongodb.net/ProjectFullStack")
    console.log("mongoose connect")
    app.listen(4000, ()=>{
        console.log("Start at port 3000")
    })
}
fun()