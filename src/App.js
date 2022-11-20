import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Components/Users';
import UsersForm from './Components/UsersForm';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {userName:"Phil", email:"phil5@java.com", gen:"23"},
                {userName:"Jamie", email:"jamie@java.com", gen:"4"},
                {userName:"Foster", email:"foster@java.com", gen:"20"}
            ],
        }
    }
        addNewUser = (newUser) => {
            this.setState({
                users: [...this.state.users, newUser],
            });
        }
        render() {
        let userData = this.state.users
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="6">
                            <UsersForm addUser = {this.addNewUser} />
                        </Col>
                        <Col >
                            <Users userInfo = {userData}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
