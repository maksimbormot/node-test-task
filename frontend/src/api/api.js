import axios from 'axios'
import urlencodeForm from "../services/urlencodeForm";
import JWT from "jwt-decode";
import to from '../services/to'

export const API_URL = 'http://localhost:3333'

export const get = async (url) => await to(axios.get(API_URL + url))
export const post = async (url, data) => await to(axios.post(API_URL + url, data))


export const getUsers = async () => {

  const [err, response] = await get('/users')
  if (err) throw err.response.data

  return response.data
}

export const registerUser = async (form) => {

  const [err, response] = await post('/register', urlencodeForm(form))
  if (err) throw err.response.data
  const user = JWT(response.data.token).data

  rememberUser(user)

  rememberToken(response.data)

  return user
}
export const loginForm = async (form) => {

  const [err, response] = await post('/login', urlencodeForm(form))
  if (err) throw err.response.data

  const user = JWT(response.data.token).data

  rememberUser(user)
  rememberToken(response.data)


  return user
}

export const getSavedUser = () => {
  return JWT(localStorage.getItem('token')).data
}

const rememberUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user))
}
const rememberToken = (response) => {
  localStorage.setItem('token', response.token)
  localStorage.setItem('refreshToken', response.refreshToken)
}
