const { json } = require("express");
const UserService = require("../services/user");
const router = require("express").Router();
const uuid = require("uuid");
router.post("/", async (req, res) => {
  try {
    let response = null;
    let body = Object.assign({}, req.body);
    body.userId = uuid.v4();
    response = await UserService.Signup(body);
    res.status(200).json({ response });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await UserService.Signin(
      req.body.username,
      req.body.password
    );
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
