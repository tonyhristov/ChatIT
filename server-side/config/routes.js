const router = require("../routes/");

module.exports = (app) => {
  app.use("/api/user", router.user);
  app.use("/api/chats", router.chats);
  app.use("/api/messages", router.messages);

  app.use("*", (req, res, next) =>
    res.send("<h1> Something went wrong. Try again. :thumbsup: </h1>")
  );
};
