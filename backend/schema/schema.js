const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} = graphql;

var courtDB = [
    {
        "court": "1",
        "slot" : [
            {
                "time": "7",
                "name": "",
                "status": "available"
            },
            {
                "time": "8",
                "name": "",
                "status": "available"
            }
        ]
    },
    {
        "court": "2",
        "slot" : [
            {
                "time": "7",
                "name": "",
                "status": "available"
            },
            {
                "time": "8",
                "name": "",
                "status": "available"
            }
        ]
    },
];

const SlotType = new GraphQLObjectType({
    name: "Slot",
    fields: () => ({
        time : {type: GraphQLString},
        name: { type: GraphQLString },
        status: { type: GraphQLString },
      }),
})

const CourtType = new GraphQLObjectType({
  name: "Court",
  fields: () => ({
    court: { type: GraphQLString },
    slot: { type: new GraphQLList(SlotType) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    court: {
      type: CourtType,
      args: { court: { type: GraphQLString } },
      resolve(parent, args) {
        return courtDB.find((item) => {
          return item.court == args.court;
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
