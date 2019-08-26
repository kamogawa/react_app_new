import React from 'react';
import Test from './Component/Test'

const food = [
  {
    name: "tonkatsu",
    location: "ueno"
  },
  {
    name: "ramen",
    location: "akiba"

  },
  {
    name: "gyoza",
    location: "kanda"
  },
]

const testCall = (v, i) => {
  return (<Test key={i} name={v.name}/>);
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
