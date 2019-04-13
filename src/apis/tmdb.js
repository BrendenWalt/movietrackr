import Axios from "axios";

const KEY = '1316feaf4d0c0ea76bfd3817fad4e55a'

export default Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY
  }
})

