const controllers = require("../controllers/");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", controllers.chat.get);
router.get("/currentUserPosts", controllers.chat.getCurrentUserPosts);

router.post("/", auth(), controllers.chat.post);

router.put("/:id", auth(), controllers.chat.put);

router.delete("/:id", auth(), controllers.chat.delete);

module.exports = router;
