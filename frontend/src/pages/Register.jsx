import React, {Component} from 'react'
import { Card} from "reactstrap";
import Layout from "../modules/Layout/LayoutContainer";
import RegisterForm from "../modules/Auth/RegisterForm";
import {registerUser} from '../modules/Auth/user.action'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

@connect(store => store.userReducer)
export default class Register extends Component {
    componentDidUpdate() {
        if (this.props.token)
            this.props.history.push('/dashboard')
    }

    handleSubmit(e) {
        this.props.dispatch(registerUser(e.target.form))
    }

    render() {
        const {user} = this.props
        if (user) {
            return <Redirect to='/dashboard'/>
        }
        return <Layout>
            <Card style={{maxWidth: 900}} className='mx-auto p-4'>
                <RegisterForm errors={this.props.errors} onSubmit={this.handleSubmit.bind(this)}/>
            </Card>
        </Layout>
    }
}
