const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
  type Supply {
  id: String
  team: Int
  }
  type EquipmentAdv {
    id: ID!
    used_by: String!
    count: Int!
    use_rate: Float
    is_new: Boolean!
  }
`
const resolvers = {
  Query: {
  supplies: (parent, args) => dbWorks.getSupplies(args)
  },
  Mutation: {
  deleteSupply: (parent, args) => dbWorks.deleteItem('supplies', args),
  }
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers
}

