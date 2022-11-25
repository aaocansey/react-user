import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: this.props.userInfo.userName,
            email: this.props.userInfo.email,
            gen: this.props.userInfo.gen,
            id: this.props.userInfo.id
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.addUser(this.state)
        // let replacementData = this.state
        this.props.updateUser(this.state.id, this.state);
        this.setState({
            userName: "",
            email: "",
            gen: "",
        });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={this.state.userName}
                            name="userName"
                            onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} name="email" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Gen</Form.Label>
                        <Form.Control type="number" placeholder="Gen" value={this.state.gen} name="gen" onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default EditForm;
