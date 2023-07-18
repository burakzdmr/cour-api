const { json } = require("express");
const CourService = require("../services/cour");
const uuid = require("uuid");
const router = require("express").Router();
router.post("/", async (req, res) => {
  try {
    let response = null;
    let body = Object.assign({}, req.body);
    body.courId = uuid.v4();
    body.date = new Date(req.body.date);
    response = await CourService.SaveCour(body);
    res.status(200).json({ response });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/", async (req, res) => {
  try {
    let response = null;
    let body = Object.assign({}, req.body);
    response = await CourService.UpdateCour(body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let response = null;
    let data = await CourService.GetCours();
    if (req?.query?.startDate && req?.query?.endDate) {
      const start = new Date(req?.query?.startDate);
      const end = new Date(req?.query?.endDate);
      const filteredData = data.filter((x) => x.date >= start && x.date <= end);
      response = filteredData;
    } else {
      response = data;
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/", async (req, res) => {
  try {
    await CourService.DeleteCour(req.query.id);
    res.status(200).json("Kurs silindi");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
