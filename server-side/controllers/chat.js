const models = require("../models");

module.exports = {
  getChat: (req, res, next) => {
    models.Chat.findById(req.params.id)
      .populate("author")
      .then((chats) => {
        res.send(chats);
      })
      .catch(next);
  },

  getCurrentUserChats: (req, res, next) => {
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
  getChatsPartOf: (req, res, next) => {
    const CurrentUser = req.headers.referer;
    models.User.findById(CurrentUser.split("/").pop())
      .populate("participatedIn")
      .then((user) => {
        res.send(user.participatedIn);
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
          models.Chat.findOne({ _id: createdChat._id }),
        ]);
      })
      .then(([modifiedObj, chatObj]) => {
        res.send(chatObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const { _id } = req.user;
    const { name } = req.body;

    models.Chat.findOneAndUpdate(
      { name: name },
      {
        $addToSet: {
          participants: [_id],
        },
      }
    )
      .then((updatedChat) => {
        models.User.findByIdAndUpdate(_id, {
          $addToSet: {
            participatedIn: [updatedChat._id],
          },
        }).then((user) => {});

        res.send(updatedChat);
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
