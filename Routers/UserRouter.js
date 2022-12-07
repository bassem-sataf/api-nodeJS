var express = require('express');
var router = express.Router();
const { User, Group } = require('../models');

router.get("/", async (req, res) => {
  const users = await User.findAll({
    attributes: ['firstName', 'lastName']
  });
  res.json(users);
});

module.exports = router;