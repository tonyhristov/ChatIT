const authenticate = async (url, body, onSuccess, onFailure) => {
  try {
    const promise = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await promise.json();

    if (response) {
      onSuccess({
        username: response.username,
        id: response._id,
      });
    } else {
      onFailure();
    }
  } catch (e) {
    onFailure(e);
  }
};

export default authenticate;
