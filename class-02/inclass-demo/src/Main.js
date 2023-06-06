import React from 'react';
import Person from './Person';
import data from './data/data.json'; // data === [{...}, {...}]
import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map(personObj => {
          return <Person firstName={personObj.name} imageURL={personObj.imageURL} />
        })}
      </main>
    )
  }
}

export default Main;