const models = require("../models");

module.exports = {
  getMessages: (req, res, next) => {
    models.Message.find()
      // .populate("author")
      .then((messages) => {
        const filtered = messages.filter((messages) => {
          // return messages.chat == id;

          const author = req.headers.referer;

          return messages.chat == author.split("/").pop();
        });

        res.send(filtered);
      })
      .catch(next);
  },

  post: (req, res, next) => {
    const { message, chatId } = req.body;
    const { _id, username } = req.user;
    const id = req._id;

    console.log(req.user);

    models.Message.create({
      message,
      author: _id,
      authorUsername: username,
      chat: chatId,
    })
      .then((createdChat) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { messages: createdChat } }),
          models.Chat.updateOne({ id }, { $push: { messages: createdChat } }),
          models.Message.findOne({ _id: createdChat._id }),
        ]);
      })
      .then(([modifiedObj, chatObj]) => {
        res.send(chatObj);
      })
      .catch(next);
  },
};
