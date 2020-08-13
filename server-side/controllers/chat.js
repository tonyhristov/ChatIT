const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    const length = req.query.length ? parseInt(req.query.length) : 20;
    models.Chats.find()
      .sort("-created_at")
      .limit(length)
      .populate("author")
      .then((chats) => res.send(chats))
      .catch(next);
  },

  getCurrentUserPosts: (req, res, next) => {
    const length = req.query.length ? parseInt(req.query.length) : 20;
    models.Chats.find()
      .limit(length)
      .populate("author")
      .then((chats) => {
        const filtered = chats.filter((origami) => {
          const author = req.headers.referer;

          return chats.author._id == author.split("/").pop();
        });

        res.send(filtered);
      })
      .catch(next);
  },

  post: (req, res, next) => {
    const { name } = req.body;
    const { _id } = req.user;

    models.Chats.create({ name, author: _id })
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
    const id = req.params.id;
    const { name } = req.body;
    models.Chats.updateOne({ _id: id }, { name })
      .then((updatedChat) => res.send(updatedChat))
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Chats.deleteOne({ _id: id })
      .then((removedChat) => res.send(removedChat))
      .catch(next);
  },
};
