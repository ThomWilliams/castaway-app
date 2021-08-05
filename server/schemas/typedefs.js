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
    itunes_id: ID
    total_episodes: Int
    latest_pub_date_ms: Int
    earliest_pub_date_ms: Int
    explicit_content: Boolean
#    Check three below
    extra: [String]!
    genre_ids: [ID!]
    episodes: [Int!]
  }

  type Genre {
    id: ID
    name: String
    parent_id: ID
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
    itunes_id: ID
    total_episodes: Int
    latest_pub_date_ms: Int
    earliest_pub_date_ms: Int
    explicit_content: Boolean
#    Check three below
    extra: [String]!
    genre_ids: [ID!]
    episodes: [String!]
  }

  type Query {
    user: User
    podcast(podcastId: ID!): Podcast
    podcasts: [Podcast]!
    genre(genreId: ID!): Genre
    genres: [Genre]!
  }

  type Mutation {
    login(password: String!, email: String!): Auth
    addUser(username: String!, email: String!, password: String!, gender: String!, dob: String!): Auth
    updateUser(username: String!, email: String!, password: String!, gender: String!, dob: String!): Auth
    savePodcast(podcastData: PodcastInput!): User
    removePodcast(_id: ID!): User
    addPodcast(podcasts: [ID]!): Podcast
  }

`;

module.exports = typeDefs;
