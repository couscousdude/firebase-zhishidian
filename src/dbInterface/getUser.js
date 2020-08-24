import axios from 'axios';

async function getUser() {
    const res = await axios.get('https://run.mocky.io/v3/883e5882-30f0-4615-99f8-708dbd0dd050');
    return res.data;
}
export default getUser;