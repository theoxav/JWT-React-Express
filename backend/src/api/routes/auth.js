const { loginUser, currentUser, logoutUser } = require("../controllers/auth");

const router = require("express").Router();

router.post("/", loginUser);
router.get("/current", currentUser);
router.delete("/", logoutUser);

module.exports = router;
