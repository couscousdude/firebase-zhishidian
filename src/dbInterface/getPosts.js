import axios from 'axios';
// const axios = require('axios');

async function getPosts() {
    const res = await axios.get('https://run.mocky.io/v3/138570d3-73ee-48e1-88ab-664140f30a6d');
    return res.data;
}
export default getPosts;