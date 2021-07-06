import React, { Component } from 'react';
import { Modal, Button,Form } from 'react-bootstrap';

export class Modale extends Component {
    render() {
        return (
            <div>
                 <Modal
                 show={this.props.show}
                 onHide={this.props.close}
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          fav modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={this.props.Updat}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="Enter email"
    name='strDrink' defaultValue={this.props.strDrink} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>img url</Form.Label>
    <Form.Control type='text' placeholder="Enter email"
    name='strDrinkThumb' defaultValue={this.props.strDrinkThumb} />
    
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
       
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
                
            </div>
        )
    }
}

export default Modale ;
