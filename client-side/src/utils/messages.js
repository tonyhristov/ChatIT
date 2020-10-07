const getMessages = async (userid) => {
  const promise = await fetch(
    `http://localhost:9999/api/messages/getMessages`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: userid,
      },
    }
  );
  const messages = await promise.json();

  return messages;
};

export default getMessages;
