//const { GraphQLServer } = require("graphql-yoga")
const { createServer } = require("@graphql-yoga/node")
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Query {
        users: [FullData!]
        user: Int!
    }

    type State {
        detail: Detail,
        status: Int!
    }

    type Detail {
        stuInfo1: String,
        stuInfo2: String,
        stuInfo3: String,
        stuInfo4: String,
    }

    type FullData {
        id: Int!
        name: String!
        state: [State]
    }
`

const resolvers = {
    Query:{
        users(){
            return users
        }
    }
}

module.exports = makeExecutableSchema({ typeDefs, resolvers })