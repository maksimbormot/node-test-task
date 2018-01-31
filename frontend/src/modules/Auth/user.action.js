import * as API from '../../api/api'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const CREATE_CARGO = 'CREATE_CARGO'
export const GET_USERS = 'GET_USERS'

export const registerUser = (form) => dispatch => {
  dispatch({
    type: REGISTER_USER + "_PENDING",
  })
  API.registerUser(form).then(users => {
    dispatch({
      type: REGISTER_USER + "_SUCCESS",
      payload: users,
    })
    dispatch(getUsers())
  }).catch(err => {
    dispatch({
      type: REGISTER_USER + "_REJECTED",
      payload: err,
    })
  })

}

export const loginUser = data => !data ?
  ({
    type: LOGIN_USER + "_FULFILLED",
    payload: API.getSavedUser()
  }) : ({
    type: LOGIN_USER,
    payload: API.loginForm(data)
  })

export const logoutUser = () => {
  localStorage.clear()

  return {
    type: LOGOUT_USER,
  }
}
export const getUsers = () => ({
  type: GET_USERS,
  payload: API.getUsers(),
})

export const createCargo = form => ({
  type: CREATE_CARGO,
  payload: API.createCargo(form)
})