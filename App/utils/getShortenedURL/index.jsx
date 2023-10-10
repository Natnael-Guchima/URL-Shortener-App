export default getShortenedURL = async link => {
  //GET/POST: https://api.shrtco.de/v2/shorten?url=example.com url to use to get shortened url

  try {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`,
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (e) {
    return e;
  }
};
