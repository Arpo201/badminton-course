const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = graphql;

var courtDB = [
  {
    id: "1",
    name: "สนาม1",
    state: [
      {
        slot1: 0,
        slot2: 1,
        slot3: 0,
        slot4: 0,
        slot5: 0,
        slot6: 0,
        slot7: 0,
        slot8: 0,
        slot9: 0,
        slot10: 0,
        slot11: 0,
        slot12: 0,
      },
    ],
  },
  {
    id: "2",
    name: "สนาม2",
    state: [
      {
        slot1: 0,
        slot2: 1,
        slot3: 0,
        slot4: 0,
        slot5: 0,
        slot6: 0,
        slot7: 0,
        slot8: 0,
        slot9: 0,
        slot10: 0,
        slot11: 0,
        slot12: 0,
      },
    ],
  },
  {
    id: "3",
    name: "สนาม3",
    state: [
      {
        slot1: 0,
        slot2: 1,
        slot3: 0,
        slot4: 0,
        slot5: 0,
        slot6: 0,
        slot7: 0,
        slot8: 0,
        slot9: 0,
        slot10: 0,
        slot11: 0,
        slot12: 0,
      },
    ],
  },
];

const StateType = new GraphQLObjectType({
  name: "State",
  fields: () => ({
    slot1: {type: GraphQLInt},
    slot2: {type: GraphQLInt},
    slot3: {type: GraphQLInt},
    slot4: {type: GraphQLInt},
    slot5: {type: GraphQLInt},
    slot6: {type: GraphQLInt},
    slot7: {type: GraphQLInt},
    slot8: {type: GraphQLInt},
    slot9: {type: GraphQLInt},
    slot10: {type: GraphQLInt},
    slot11: {type: GraphQLInt},
    slot12: {type: GraphQLInt},
  }),
});

const CourtType = new GraphQLObjectType({
  name: "Court",
  fields: () => ({
    id: { type: GraphQLString },
    name: {type: GraphQLString},
    state: { type: new GraphQLList(StateType) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    court: {
      type: CourtType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return courtDB.find((item) => {
          return item.id == args.id;
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
