import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class UpdateCatModal extends React.Component {

  handleCatUpdate = (event) => {
    event.preventDefault();

    let catToUpdate = {
      name: event.target.name.value,
      color: event.target.color.value,
      age: +event.target.age.value,
      location: event.target.location.value,
      spayNeuter: event.target.spayNeuter.checked,
      _id: this.props.catToUpdate._id,
      __v: this.props.catToUpdate.__v
    }

    this.props.putCat(catToUpdate);
    this.props.closeUpdateModal();
  }

  render(){
    return(
      <Modal show={this.props.showModal} onHide={this.props.closeUpdateModal}>
         <Container className="mt-5">
            <Form onSubmit={this.handleCatUpdate}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" defaultValue={this.props.catToUpdate.name}/>
              </Form.Group>
              <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text"  defaultValue={this.props.catToUpdate.color}/>
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" defaultValue={this.props.catToUpdate.age}/>
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" defaultValue={this.props.catToUpdate.location}/>
              </Form.Group>
              <Form.Group controlId="spayNeuter">
                <Form.Check type="checkbox" label="spay-neuter" defaultChecked={this.props.catToUpdate.spayNeuter}/>
              </Form.Group>
              <Button type="submit">Update Cat</Button>
            </Form>
          </Container>
      </Modal>
    )
  }
}

export default UpdateCatModal;