const models = require("../models");

module.exports = {
  getChat: (req, res, next) => {
    models.Chat.findOne({ "_id.$oid": req._id })
      .populate("author")
      .then((chats) => res.send(chats))
      .catch(next);
  },

  getCurrentUserPosts: (req, res, next) => {
    const length = req.query.length ? parseInt(req.query.length) : 20;
    models.Chat.find()
      .limit(length)
      .populate("author")
      .then((chats) => {
        const filtered = chats.filter((chats) => {
          const author = req.headers.referer;

          return chats.author.id == author.split("/").pop();
        });

        res.send(filtered);
      })
      .catch(next);
  },

  post: (req, res, next) => {
    const { name } = req.body;
    const { _id } = req.user;

    models.Chat.create({ name, author: _id })
      .then((createdChat) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { chats: createdChat } }),
          models.Chats.findOne({ _id: createdChat._id }),
        ]);
      })
      .then(([modifiedObj, chatObj]) => {
        res.send(chatObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params._id;
    const { name } = req.body;
    models.Chat.findByIdAndUpdate(id, { name })
      .then((updatedUser) => {
        res.send(updatedUser);
      })
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Chat.deleteOne({ _id: id })
      .then((removedChat) => res.send(removedChat))
      .catch(next);
  },
};
