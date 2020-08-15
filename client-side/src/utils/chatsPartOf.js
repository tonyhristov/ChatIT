const getChatsPartOf = async () => {
  const promise = await fetch(`http://localhost:9999/api/chats/chats-part-of`);
  const chats = await promise.json();

  return chats;
};

export default getChatsPartOf;
