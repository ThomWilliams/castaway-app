const router = require("express").Router();

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// SIGN-UP
router.post("/signup", async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const userData = await User.create({ username, email, password });
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.email = userData.email;
        req.session.logged_in = true;
        req.session.favouriteOutfits = [];
  
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });
  
  // LOGIN
  router.post("/login", async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res.status(400).json({
          message: "Incorrect email or password, please re-attempt login",
        });
        return;
      }
  
      const correctPassword = await userData.checkPassword(req.body.password);
  
      if (!correctPassword) {
        res.status(400).json({
          message: "Incorrect email or password, please re-attempt login",
        });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        req.session.favouriteOutfits = [];
  
        res.json({ user: userData, message: "Login Successful" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // LOGOUT
  router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;