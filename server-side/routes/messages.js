const controllers = require("../controllers/");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/getMessages", controllers.message.getMessages);
router.post("/", auth(), controllers.message.post);

module.exports = router;
