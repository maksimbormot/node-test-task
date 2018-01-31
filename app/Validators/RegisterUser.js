module.exports = class RegisterUser {
  get rules() {
    return {
      first_name: 'required',
      last_name: 'required',
      location: 'required',
      dob: 'required',
      password: 'required'
    }
  }
}
