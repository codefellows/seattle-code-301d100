import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: [],
      error: false,
      errorMsg: ''
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  // *** async/await - handle our asychronous code
  // *** try/catch - handle our errors - TRY to resolve the promise, & if not successful it will CATCH our errors

  handleGetCityInfo = async (event) => {
    event.preventDefault();

    try {

      // TODO: use axios to pass in the url to hit a location - use city in STATE

      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);

      // TODO: store that return from axios into state

      // console.log(cityDataFromAxios.data[0]);
      // cityDataFromAxios -> variable that holds the whole return from Axios
      // .data property -> where axios stores the return from the API
      // [0] -> first obj in the API response that is the actual city I searched for

      this.setState({
        locationData: cityDataFromAxios.data[0],
        error: false, 
        errorMsg: ''
      })

    } catch (error) {
      // TODO: Set state with the error boolean and the error message
      this.setState({
        error: true,
        errorMsg: error.response.data.error
      })
    }

  }

  // *** MAP PORTION OF YOUR LAB IMG SRC POINTS TO THIS URL: 
  // *** https://maps.locationiq.com/v3/staticmap?key=<YOUR API KEY>&center=<CITY'S LAT>,<CITY'S LON>&zoom=13


  render() {

    return (
      <>
        <form onSubmit={this.handleGetCityInfo}>
          <label htmlFor=""> Enter a City Name:
            <input type="text" onInput={this.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>

        {/* TERNARY - WTF */}

        { 
          this.state.error 
          ? <p>{this.state.errorMsg}</p>
          : <p>{this.state.locationData.display_name}</p>
        }
      </>
    )
  }
}

export default App;