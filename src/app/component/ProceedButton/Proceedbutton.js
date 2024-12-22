import React, { useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { createAccount } from '../helper/Helper';
function MyVerticallyCenteredModal(props) {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
      email: '',
      firstName: '',
      lastName: '',
    });
  
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic
      console.log('Form Data Submitted:', formData);
      handleClose(); // Close modal after submission
    };
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='text-heading fw-bold' id="contained-modal-title-vcenter ">
                    Create Account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label className='m-0 mx-1 text-secondary fw-medium'>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group  className='mt-2' controlId="formPassword">
              <Form.Label className='m-0 mx-1 text-secondary fw-medium' >First name</Form.Label>
              <Form.Control

                type="test"
                placeholder="Enter firstname"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='mt-2' controlId="formConfirmPassword">
              <Form.Label className='m-0 mx-1 text-secondary fw-medium'>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* <Form.Group controlId="formRememberMe" className='mt-2'>
              <Form.Check
                type="checkbox"
                label="Remember me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
            </Form.Group> */}

            {/* <p className='mt-2'>
              By creating an account, you agree to our{' '}
              <a href="#" style={{ color: 'dodgerblue' }}>
                Terms & Privacy
              </a>
              .
            </p> */}
          </Form>
        </Modal.Body>
            <Modal.Footer>
                <button className='rounded text-white border border-none px-3 py-1' onClick={()=>createAccount(formData)}>Create your account</button>
            </Modal.Footer>
        </Modal>
    );
}

function Proceedbutton() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Proceed to pay
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
export default Proceedbutton;

