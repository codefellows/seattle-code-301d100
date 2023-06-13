import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      species: '',
      petData: {},
      showPet: false,
    }
  }

  handleInput = (e) => {
    this.setState({
      species: e.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    // todo: use axios to hit my api
    // http://localhost:3001/pets?species=cat
    let url = `${process.env.REACT_APP_SERVER}/pets?species=${this.state.species}`
    let dataFromAxios = await axios.get(url);
    // todo: store that info into state
    this.setState({
      petData: dataFromAxios.data,
      showPet: true
    })
  }
  

  render(){
    return(
      <>
        <h1>API Calls</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search
            <input type="text" onInput={this.handleInput} />
          </label>
          <button type="submit">Display Pet</button>
        </form>
        {
          this.state.showPet && <p>{this.state.petData.name} is a {this.state.petData.breed}</p>
        }
      </>
    )
  }
}

export default App;