import React from 'react';
import Location from './Location';
import Error from './Error';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      locationData: [],
      error: true
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleGetCityInfo = (event) => {
    event.preventDefault();
    // make a call to our Location IQ API with what is in state -> this.state.city
  }

  render(){
    console.log('app state: ', this.state.city)
    return(
      <>
      <form onSubmit={this.handleGetCityInfo}>
        <label htmlFor=""> Enter a City Name: 
          <input type="text" onInput={this.handleCityInput}/>
        </label>
        <button type="submit">Explore!</button>
      </form>

      {/* TERNARY EXAMPLE - WTF WHAT ? TRUE : FALSE */}
      {this.state.locationData.length ? <Location locationData={this.state.locationData} /> : null}


      {/* SHORT CIRCUIT - &&  */}
      {this.state.error && <Error />}
      </>
    )
  }
}

export default App;