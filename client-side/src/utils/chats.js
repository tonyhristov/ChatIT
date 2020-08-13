const getMyChat = async () => {
  const promise = await fetch(
    `http://localhost:9999/api/chats/currentUserPosts`
  );
  const chats = await promise.json();

  return chats;
};

export default getMyChat;
