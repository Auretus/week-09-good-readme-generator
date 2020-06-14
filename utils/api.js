const axios = require("axios");
require("dotenv").config();

const api = {
  getUser(userName) {
    /* arguments: username[string] - Github username
     * return: userData[object] = object containing two strings, the url of the user's profile picture, and the user's GitHub email
     */
    return axios.get(`https://api.github.com/users/${userName}`)
    .catch((err) => {
      console.log(err); 
    })
  }
};

module.exports = api;
