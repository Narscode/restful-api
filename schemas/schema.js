const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql');
const User = require('../models/User');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { email: { type: GraphQLString } },
            resolve(parent, args) {
                return User.findByEmail(args.email);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
