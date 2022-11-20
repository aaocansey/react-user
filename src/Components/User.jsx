import React from 'react';
import {Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const User = (props) => {
    return (
        <Col md="4" style={{ marginBottom: "2rem" }}>
            <Card style={{ width: '12rem' }}>
                <Card.Body>
                    <Card.Title>User Info</Card.Title>
                    <Card.Title>Name: {props.userInfo.userName}</Card.Title>
                    <Card.Link href="#">Email: {props.userInfo.email}</Card.Link>
                    <Card.Subtitle className="mb-2 text-muted">Gen: {props.userInfo.gen}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default User;
