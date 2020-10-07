const getMyChat = async (userId) => {
  const promise = await fetch(
    `http://localhost:9999/api/chats/currentUserChats`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userId: userId,
      },
    }
  );
  const chats = await promise.json();

  return chats;
};

export default getMyChat;
