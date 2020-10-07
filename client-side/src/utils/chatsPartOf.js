const getChatsPartOf = async (userId) => {
  const promise = await fetch(`http://localhost:9999/api/chats/chats-part-of`,{
    method: "GET",
    headers:{
      "Content-Type": "application/json",
      "userId": userId
    }
  });
  const chats = await promise.json();

  return chats;
};

export default getChatsPartOf;
