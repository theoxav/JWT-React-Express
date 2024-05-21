const createUser = require("../controllers/user");

const router = require("express").Router();

router.get("/", (req, res) => res.json("Get Users route"));
router.post("/", createUser);

module.exports = router;
