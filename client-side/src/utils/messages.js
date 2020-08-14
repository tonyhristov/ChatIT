const getMessages = async () => {
  const promise = await fetch(`http://localhost:9999/api/messages/getMessages`);
  const messages = await promise.json();

  return messages;
};

export default getMessages;
