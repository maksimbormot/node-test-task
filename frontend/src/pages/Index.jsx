import React from 'react'
import LayoutContainer from "../modules/Layout/LayoutContainer"
import {Button, Card, Form, FormGroup, Input, Table} from "reactstrap"
import {getUsers, registerUser} from "../modules/Auth/user.action"
import {connect} from "react-redux"
import Geosuggest from 'react-geosuggest'

@connect(store => store.userReducer)
export default class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  handleAddUser(e) {
    e.preventDefault()
    this.props.dispatch(registerUser(e.target.form))
  }

  render() {
    const {users} = this.props
    return <LayoutContainer>
      <Table>
        <tbody>
        {users.map((user, key) =>
          <tr {...key}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.dob}</td>
            <td>{user.location}</td>
          </tr>)}
        </tbody>
      </Table>
      <Card className='p-5 m-5'>
        <Form>
          <FormGroup>
            <Input type="email" name="email" placeholder="E-mail"/>
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" placeholder="Password"/>
          </FormGroup>
          <FormGroup>
            <Input type="text" name="first_name" placeholder="First name"/>
          </FormGroup>
          <FormGroup>
            <Input type="text" name="last_name" placeholder="Last name"/>
          </FormGroup>
          <FormGroup>
            <Input type="date" name="dob" placeholder="Date of Birth"/>
          </FormGroup>
          <FormGroup>
            <Geosuggest name="location" placeholder="Location"/>
          </FormGroup>
          <Button color='primary' size="lg" block onClick={this.handleAddUser.bind(this)} type='submit'>
            Add User
          </Button>
        </Form>
      </Card>
    </LayoutContainer>
  }
}