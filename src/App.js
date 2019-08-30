import React from 'react';
import Test from './Component/Test' 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      food: [
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
      
    }
  };

  testCall = (v, i) => {
    return (<Test key={i} name={v.name} rating={v.rating}/>);
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false})
    }, 3000);
  }

  render() {
    const {isLoading, food} = this.state
    return (
      <div>
        <h1>{isLoading ? "Loading" : "Ready!" }</h1>
        <h1>Component test</h1>
        {food.map(this.testCall)}
      </div>
    );
  }
}

export default App;
