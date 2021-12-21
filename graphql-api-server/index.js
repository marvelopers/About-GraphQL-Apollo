const { ApolloServer } = require('apollo-server')
const _ = require('lodash')

const queries = require('./typedefs-resolvers/_queries')
const mutations = require('./typedefs-resolvers/_mutations')
const equipments = require('./typedefs-resolvers/equipments')
const people = require('./typedefs-resolvers/people')
const enums = require('./typedefs-resolvers/enums')
const supplies = require('./typedefs-resolvers/supplies')
const givens = require('./typedefs-resolvers/givens')
const tools = require('./typedefs-resolvers/tools')

const typeDefs = [
    queries,
    mutations,
    enums,
    people.typeDefs,
    equipments.typeDefs,
    supplies.typeDefs,
    givens.typeDefs,
    tools.typeDefs,
]

const resolvers = [
    people.resolvers,
    equipments.resolvers,
    supplies.resolvers,
    givens.resolvers,
    tools.resolvers,
]

const server =  new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})
