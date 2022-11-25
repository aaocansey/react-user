import React from 'react';
import {Container, Row } from 'react-bootstrap';
import User from './User';

const Users = (props) => {
    return (
        <Container>
            <Row>
                {props.userInfo.map((user, index) => {
                        return <User userInfo={user} key={index} updateUser={props.updateUser} deleteUser = {props.deleteUser}/>
                    }
                )}
            </Row>
        </Container>
    );
}

export default Users;
