const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const session = require("express-session");


// Import `authMiddleware()` function to be configured with the Apollo Server
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
 // context: authMiddleware,
});


server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  // //   db: sequelize,
  // }),
};
app.use(session(sess));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});