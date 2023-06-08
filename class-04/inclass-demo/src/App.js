import React from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

let data = [1,2,3,4,5,6,7,8,9,10]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedData: data
    }
  }

  handleSelect = (event) => {
    let selected = event.target.value;

    if(selected === "even"){
      let newData = data.filter(num => num % 2 === 0);
      this.setState({
        sortedData: newData
      })
    } else if(selected === "odd"){
      let newData = data.filter(num => num % 2 === 1);
      this.setState({
        sortedData: newData
      })
    } else if(selected === "all"){
      this.setState({
        sortedData: data
      })
    }
  }

  render() {

    return (
      <>
        <h1>Forms in React</h1>
        <Form>
          <Form.Select onChange={this.handleSelect}>
            <option value="1">Select an option</option>
            <option value="all">All</option>
            <option value="even">Even</option>
            <option value="odd">Odd</option>
          </Form.Select>
        </Form>
        <ListGroup>
          {this.state.sortedData.map((num, index) => {
            return <ListGroup.Item key={index}>{num}</ListGroup.Item>
          })}
        </ListGroup>
      </>
    )
  }
}

export default App;


// handleSubmit = (event) => {
//   event.preventDefault();
  
//   this.setState({
//     username: event.target.username.value
//   })
//   console.log('from state in submit handler: ', this.state.username);
// }

// handleInput = (event) => {
//   this.setState({
//     myName: event.target.value
//   })
// }

// <p>After form Submission: {this.state.username}</p>
//         <p>On Input:  {this.state.myName}</p>
//         <form onSubmit={this.handleSubmit}>
//           <fieldset>
//             <legend className="legend">User Info</legend>
//             <label htmlFor="username">Username: </label>
//             <input id="username" type="text" name="username" onInput={this.handleInput} />
//           </fieldset>
//           <button type="submit">Submit</button>
//         </form>