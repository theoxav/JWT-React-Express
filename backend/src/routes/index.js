const router = require("express").Router();
const apiRouter = require("../api/routes");

router.use("/api", apiRouter);
router.get("/", (req, res) => res.json("Hello World!"));

module.exports = router;
