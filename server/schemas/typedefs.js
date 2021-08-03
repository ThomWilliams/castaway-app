const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    podcastCount: Int!
    gender: String!
    dob: String!
    savedPodcasts: [Podcast]
  }

  type Podcast {
    _id: ID!
    description: String
    image: String
    thumbnail: String
    title: String
    country: String
    language: String
    publisher: String
    website: String
    itunes_id: INT
    total_episodes: INT
    latest_pub_date_ms: INT
    earliest_pub_date_ms: INT
    explicit_content: Boolean
#    Check three below
    extra: Object!
    genre_ids: [Array!]
    episodes: [Array!]
  }

  type Auth {
    token: ID!
    user: User
  }

  input PodcastInput { 
    _id: ID!
    description: String
    image: String
    thumbnail: String
    title: String
    country: String
    language: String
    publisher: String
    website: String
    itunes_id: INT
    total_episodes: INT
    latest_pub_date_ms: INT
    earliest_pub_date_ms: INT
    explicit_content: Boolean
#    Check three below
    extra: Object!
    genre_ids: [Array!]
    episodes: [Array!]
  }

  type Query {
    user: User
    podcast: Podcast
  }

  type Mutation {
    login(password: String!, email: String!): Auth
    addUser(username: String!, email: String!, password: String!, gender: String!, dob: String!): Auth
    updateUser(username: String!, email: String!, password: String!, gender: String!, dob: String!): Auth
    savePodcast(podcastData: PodcastInput!): User
    removePodcast(_id: ID!): User
  }

`;

module.exports = typeDefs;
