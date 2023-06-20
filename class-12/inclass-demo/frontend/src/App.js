import React from 'react';
import './App.css';
import axios from 'axios';
import Cats from './Cats';
import { Container, Form, Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    }
  }

  // TODO: define handler to get all cats
  getAllCats = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/cats`

      let catsFromDB = await axios.get(url);

      this.setState({
        cats: catsFromDB.data
      })

    } catch (error) {
      console.log(error.message);
    }
  }


  componentDidMount() {
    this.getAllCats();
  }

// **** ADD CAT TO DB USING 2 HANDLERS ****

// *** 1ST HANDLER IS GOING TO BUILD THE CAT OBJECT USING THE FORM DATA ****
  handleCatSubmit = (event) => {
    event.preventDefault();
    // TODO: BUILD THE CAT OBJECT USING THE FORM DATA

    let catObj = {
      name: event.target.name.value,
      color: event.target.color.value,
      age: +event.target.age.value,
      location: event.target.location.value,
      spayNeuter: event.target.spayNeuter.checked
    }

    this.postCat(catObj);
  }

  // *** 2nd HANDLER - POST THE CAT OBJECT TO THE DATABASE AND UPDATE STATE WITH THE NEW CREATED CAT****
  postCat = async (catObj) => {
    try {
      // TODO: build the url for axios to use
      let url = `${process.env.REACT_APP_SERVER}/cats`;

      // *** ON A POST - axios will take in 2 args. 1st - url, 2nd - data which is carried over on the req.body
      let createdCatFromDB = await axios.post(url, catObj);

      // console.log(createdCatFromDB.data);

      // TODO: get the created cat and add it to state
      this.setState({
        cats: [...this.state.cats, createdCatFromDB.data]
      })


      // OR this.getCats()

    } catch (error) {
      console.log(error.message);
    }
  }


  // ******* DELETING A CAT FROM DB ******

  deleteCat = async (id) => {
    try {
      // TODO: build the url for axios 
      let url = `${process.env.REACT_APP_SERVER}/cats/${id}`

      await axios.delete(url);

      // TODO: update state after cat was deleted
      let updatedCats = this.state.cats.filter(cat => cat._id !== id);

      this.setState({
        cats: updatedCats
      })

    } catch (error) {
      console.log(error.message)
    }
  }

  render() {

    return (
      <>
        <header>
          <h1>Cool Cats</h1>
        </header>
        <main>
          {
            this.state.cats.length > 0 &&
            <>
              <Cats
                cats={this.state.cats}
                deleteCat={this.deleteCat}
              />
            </>
          }

          <Container className="mt-5">
            <Form onSubmit={this.handleCatSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="spayNeuter">
                <Form.Check type="checkbox" label="spay-neuter" />
              </Form.Group>
              <Button type="submit">Add Cat</Button>
            </Form>
          </Container>
        </main>
      </>
    );
  }
}

export default App;