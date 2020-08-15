const controllers = require("../controllers/");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/getChat/:id", controllers.chat.getChat);
router.get("/currentUserPosts", controllers.chat.getCurrentUserPosts);

router.post("/create-chat", auth(), controllers.chat.post);

router.put("/join-chat", auth(), controllers.chat.put);

router.delete("/:id", auth(), controllers.chat.delete);

module.exports = router;
