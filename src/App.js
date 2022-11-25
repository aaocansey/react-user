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
                { userName: "Phil", email: "phil5@java.com", gen: "23", id: "tejwh308euf40680o13e-900o" },
                { userName: "Jamie", email: "jamie@java.com", gen: "4", id: "8w094u6ituej40iu4fjk4pj4l" },
                { userName: "Foster", email: "foster@java.com", gen: "20", id: "209ouj54jeik2e-pofkfokkdxvn" }
            ],
        }
    }
    addNewUser = (newUser) => {
        this.setState({
            users: [...this.state.users, newUser],
        });
    }

    updateUser = (id, replacementData) => {
        this.setState({users: this.state.users.map((item) => {
            if (item.id === id) {
                return replacementData
            } else {
                return item
            }
        })})
    }

    deleteUser = (id) => {
        let undeletedUsers = this.state.users.filter((item) => {
            if(item.id !== id){
                return item;
            }
        })
        this.setState({user: undeletedUsers})
    }

    render() {
        let userData = this.state.users
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="3">
                            <UsersForm addUser={this.addNewUser} />
                        </Col>
                        <Col >
                            <Users userInfo={userData} updateUser={this.updateUser} deleteUser={this.deleteUser}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
