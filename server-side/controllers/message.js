const models = require("../models");

module.exports = {
  getMessages: (req, res, next) => {
    const id = req.params.id;

    models.Message.find()
      .then((messages) => {
        const filtered = messages.filter((messages) => {
          return messages.chat == id;
        });

        res.send(filtered);
      })
      .catch(next);
  },

  post: (req, res, next) => {
    const { message, chatId } = req.body;
    const { _id } = req.user;
    const id = req._id;

    models.Message.create({ message, author: _id, chat: chatId })
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
