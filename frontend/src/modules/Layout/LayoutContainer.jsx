import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import UserNavbar from './UserNavbar';
import GuestNavbar from './GuestNavbar';
import {logoutUser} from "../Auth/user.action";

@connect(store => store.userReducer)
export default class LayoutContainer extends React.Component {

    render() {
        const {user, children, dispatch} = this.props
        return <div>
            {user ? <UserNavbar onLogout={() => dispatch(logoutUser())} user={user}/> : <GuestNavbar/>}

            <Container fluid className='mt-3'>
                {children}
            </Container>
        </div>
    }
}
