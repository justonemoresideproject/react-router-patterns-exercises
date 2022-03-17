import './App.css';
import React from 'react'
import Dogs from './Dogs'
import Dog from  './Dog'
import Nav from './Nav'
import Routes from './Routes'
import { v4 as uuid } from 'uuid'
import { BrowserRouter } from 'react-router-dom';

let dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: './react-router-patterns/whiskey.jpg',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ],
      id: uuid()
    },
    {
      name: "Duke",
      age: 3,
      src: './react-router-patterns/duke.jpg',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ],
      id: uuid()
    },
    {
      name: "Perry",
      age: 4,
      src: './react-router-patterns/perry.jpg',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ],
      id: uuid()
    },
    {
      name: "Tubby",
      age: 4,
      src: './react-router-patterns/tubby.jpg',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ],
      id: uuid()
    }
  ]

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav dogs={dogs}/>
          <Routes dogs={dogs}/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
