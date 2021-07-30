const jwt = require('jsonwebtoken');

// set token secret with current 2 hour expiration date set
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // middleware for authenticated routes only
  authMiddleware: function (req, res, next) {
    // Token can be sent via  re.body || req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // verifies token with user data 
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
