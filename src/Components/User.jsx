import React, {useState} from 'react';
import { Button, Col, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import EditForm from './EditForm';

const User = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleDelete = () => {
        props.deleteUser(props.userInfo.id)
        console.log(props.userInfo.id);
    }
    
    return (
        <Col md="4" style={{ marginBottom: "0.5rem" }}>
            <Card style={{ width: '14rem' }}>
                <Card.Body>
                    <Card.Title>User Info</Card.Title>
                    <Card.Title>Name: {props.userInfo.userName}</Card.Title>
                    <Card.Link href="#">Email: {props.userInfo.email}</Card.Link>
                    <Card.Subtitle className="mb-2 text-muted">Gen: {props.userInfo.gen}</Card.Subtitle>
                    <Card.Link href="#"><Button variant="primary" onClick= {handleShow}>Edit</Button></Card.Link>
                    <Card.Link href="#"><Button variant="danger" onClick={handleDelete}>Delete</Button></Card.Link>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><EditForm updateUser={props.updateUser} userInfo={props.userInfo} closeForm={handleClose}/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </Col>
    );
}

export default User;
