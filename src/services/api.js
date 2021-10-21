import axios from "axios"

const BASE_URL = "https://pixabay.com/api/"
const key = "23179954-204c91e2d20c9745fc8192c94"

const getPictures = async (search, page) => {
    try {
        
        const response = await axios.get(`${BASE_URL}?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
        console.log(response)
        return response.data.hits
    } catch (error) {
        throw new Error(error.message)
    }

}


export {getPictures}



