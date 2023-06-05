import React from 'react';


class Person extends React.Component {
  render(){
    console.log(this.props);
    return(
      <>
        <article>
          <p>Hello {this.props.firstName}!</p>
        </article>
      </>
    )
  }
}

export default Person;