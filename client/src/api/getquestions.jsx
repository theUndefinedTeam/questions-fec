const axios = require('axios');
//d
const getProductQuestions = (id) => axios.get(`http://52.26.193.201:3000/qa/${id}`)
  .then((result) => result)
  .catch((err) => { throw err; });

export default getProductQuestions;