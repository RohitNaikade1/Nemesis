import axios from 'axios';

const url = 'https://api.github.com/repositories/19438/issues';

export const fetchData = async () => {
    console.log("Reached 1")
    try {
        const data = await axios.get(url);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}