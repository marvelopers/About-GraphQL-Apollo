const DB = require('./database');
const { ApolloServer, gql } = require('apollo-server');
const database = require('./database');

const typeDefs = gql`
  type Query {
    teams: [Team]
    team(id): Team
    equipments: [Equipment]
    supplies: [Supply]
  }
  type Mutation {
    deleteEquipment(id: String): Equipment
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }
  type Equipment {
    id: String,
    used_by: String,
    count: Int, 
    new_or_used: String,
  }
  type Supply{
    id: String, 
    team: Int,
  }
`
const resolvers = {
  Query: {
    teams: () => DB.teams,
    team: (parent, args, context, info) => database.teams
      .fillter((team)=> team.id === args.id)[0],
    equipments: () => DB.equipments,
    supplies: () => DB.supplies, 
  },
  Mutation:{
    deleteEquipment: (parent, args, context, info) =>{
      const deleted = DB.equipments
          .filter((equipment) => equipment.id === args.id)[0]
      DB.equipments =  DB.equipments
          .filter((equipment) => equipment.id !== args.id)
      return deleted
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready : ${url}`)
})