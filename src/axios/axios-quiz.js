import axios from "axios"

export default axios.create({
  baseURL : 'https://quiz-app-350c5-default-rtdb.firebaseio.com/'
})