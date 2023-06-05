import React from 'react';
import Person from './Person'


class Main extends React.Component {
  render() {
    return (
      <>
        <h2>Welcome Class 301d100!</h2>
        <Person firstName="Jennifer" />
        <Person firstName="Gerald" />
        <Person firstName="Kyle" />
        <Person firstName="Ryan" />

        {/* <HornedBeast title="" description="" image_url="" /> */}
      </>
    )
  }
}

export default Main;