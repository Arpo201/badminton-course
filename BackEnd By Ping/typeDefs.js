const typeDefs = `
    type Query {
        courts: [FullData!],
        id: Int!,
        index: Int!
    }

    type State {
        detail: Detail,
        status: Int!,
        index: Int!
    }

    type Register {
        email: String!,
        password: String!,
        name : String!,
        surname: String!,
        stu_id: String!,
        role: String!,
        token: String! 
    }

    type Login {
        email: String!,
        password: String!,
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

    type Mutation {
        addUsers(id: Int!, name: String!, state: [Input]): [FullData],
        editUsers(id: Int!, name: String!, state: [Input]): [FullData],
        delete(id: Int!, name: String!, state:[Input]): [FullData],
        register(email: String!, password: String!, name: String!, surname: String!, stu_id: String!): Register,
        login(email: String!, password: String!): Register,
        addstate(id: Int!,detail: court, status: Int!, index: Int!): [FullData],
        editstate(id: Int!, index: Int!, detail: court, status: Int!): [FullData]
    }

    input court {
        stuInfo1: String,
        stuInfo2: String,
        stuInfo3: String,
        stuInfo4: String,
    }

    input Input {
        detail : Super!,
        status : Int!,
        index: Int!
    }

    input Super {
        stuInfo1 : String!,
        stuInfo2 : String!,
        stuInfo3 : String!,
        stuInfo4 : String!,
    }
`

module.exports = typeDefs;