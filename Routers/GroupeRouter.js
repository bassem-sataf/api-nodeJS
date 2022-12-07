var express = require('express');
var router = express.Router();
const { User, Group } = require('../models');

router.get("/", async (req, res) => {
  const users = await Group.findAll({
    attributes: ['Name', 'createdAt', 'updatedAt']
  });
  res.json(users);
});

module.exports = router;