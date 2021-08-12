const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const session = require("express-session");
const stripe = require('stripe')('sk_test_51JMB6bDPHWsAO5mxWgPsUmcN7ik48SpfDUiZP052v572a4QYvCbdZenrtOx16GKxu3HrMxzcX0acTNS9qLDttD3r00dOQMNJRY');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
 context: authMiddleware,
});


server.applyMiddleware({ app });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true
};
app.use(session(sess));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.post('/api/payment', async (req, res) => {
  
  const amt = req.body.amount;
  const payLoad = {
    amount: amt,
    currency: 'gbp',
    metadata: {integration_check: 'accept_a_payment'}
  };

  const paymentIntent = await stripe.paymentIntents.create(payLoad);
  res.json({client_secret: paymentIntent.client_secret});
});
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});