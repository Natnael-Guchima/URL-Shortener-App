export default getShortenedURL = link => {
  //GET/POST: https://api.shrtco.de/v2/shorten?url=example.com url to use to get shortened url

  return fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
};
