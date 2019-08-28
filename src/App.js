import React from 'react';
import Test from './Component/Test'

const food = [
  {
    name: "tonkatsu",
    location: "ueno",
    rating: 8.5
  },
  {
    name: "ramen",
    location: "akiba",
    rating: 7.0

  },
  {
    name: "gyoza",
    location: "kanda",
    rating: 9.5
  },
]

const testCall = (v, i) => {
  return (<Test key={i} name={v.name} rating={v.rating}/>);
}

function App() {
  return (
    <div>
      <h1>Component test</h1>
      {food.map(testCall)}
    </div>
  );
}

export default App;
