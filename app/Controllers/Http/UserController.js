'use strict'

const User = use("App/Models/User")

class UserController {

  async login({request, auth}) {
    const {email, password} = request.all()

    return auth.withRefreshToken().attempt(email, password, true)
  }

  async register({request, auth}) {

    const {first_name, last_name, dob, password, location} = request.all()

    const user = new User()
    user.first_name = first_name
    user.last_name = last_name
    user.dob = dob
    user.location = location
    user.password = password
    await user.save()

    return auth.withRefreshToken().generate(user, true)

  }

  async user({auth}) {
    return auth.getUser()
  }

  async users() {
    return await User.all()
  }


}

module.exports = UserController
