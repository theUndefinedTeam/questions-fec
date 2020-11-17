const axios = require('axios');

const getProductAnswer = (Id) => axios.get(`http://52.26.193.201:3000/qa/${Id}/answers`)
    .then((data) => data)
    .catch((err) => { throw err; });

export default getProductAnswer;