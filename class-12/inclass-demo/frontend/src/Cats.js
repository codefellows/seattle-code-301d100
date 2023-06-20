import { Component } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap'

class Cats extends Component {
  render() {
    return (
      <Container>
        <ListGroup>
          {this.props.cats.map((cat,index) => (
            <Cat cat={cat} key={index}  deleteCat={this.props.deleteCat}/>
          ))}
        </ListGroup>
      </Container>
    )
  }
}

class Cat extends Component {
  render() {
    return (
      <ListGroup.Item key={this.props.cat._id}>
        {this.props.cat.name} is {this.props.cat.color} cat - {this.props.cat._id}
        <Button onClick={() => this.props.deleteCat(this.props.cat._id)}>Delete</Button>
      </ListGroup.Item>
    )
  }
}

export default Cats;