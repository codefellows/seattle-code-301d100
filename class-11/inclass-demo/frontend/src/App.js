import React from 'react';
import './App.css';
import axios from 'axios';

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
      // TODO: MAKE A CALL TO MY SERVER AND HIT MY CATS ENDPOINT 
      // http://localhost:3001/cats
      let url = `${process.env.REACT_APP_SERVER}/cats`

      let catsFromDB = await axios.get(url);


      // TODO: SAVE THE RESPONSE FROM MY SERVER TO STATE
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
              {this.state.cats.map(cat => {
                return <p key={cat._id}>{cat.name} is a {cat.color} cat</p>
              })}
            </>
          }
        </main>
      </>
    );
  }
}

export default App;