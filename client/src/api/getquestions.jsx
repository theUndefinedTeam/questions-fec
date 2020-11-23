const axios = require('axios');
<<<<<<< HEAD
//d
const getProductQuestionGet = (id) => axios.get(`http://52.26.193.201:3000/qa/${id}`)
=======

const getProductQuestions = (id) => axios.get(`http://52.26.193.201:3000/qa/${id}`)
>>>>>>> 3fe6584884da7b45a5ddd2236f951edd1c19d236
  .then((result) => result)
  .catch((err) => { throw err; });

export default getProductQuestions;