const models = require("../models");

module.exports = {
  getMessages: (req, res, next) => {
    models.Message.find()
      .then((messages) => {
        const filtered = messages.filter((messages) => {
          const author = req.headers.userid;

          return messages.chat == author;
        });
        res.send(filtered);
      })
      .catch(next);
  },

  post: (req, res, next) => {
    const { message, chatId } = req.body;
    const { _id, username } = req.user;
    const id = req._id;

    models.Message.create({
      message,
      author: _id,
      authorUsername: username,
      chat: chatId,
    })
      .then((createdChat) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { messages: createdChat } }),
          models.Chat.findByIdAndUpdate(id, {
            $addToSet: { messages: createdChat },
          }).then((message) => {}),
          models.Message.findOne({ _id: createdChat._id }),
        ]);
      })
      .then(([modifiedObj, chatObj]) => {
        res.send(chatObj);
      })
      .catch(next);
  },
};
