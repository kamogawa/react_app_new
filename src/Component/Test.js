import React from "react";
import PropsTypes from 'prop-types';

class Test extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count: 10,
      rating: this.props.rating,
      name: this.props.name
    };
  }

  
  addCount = () => {    
    this.setState(
      current => {
        if(current.rating < 9){
          return {rating: current.rating+1}
        } else if (current.rating <= 10){
          return {rating: 10}
        } 
      }
    );
  }

  minusCount = () => {
    this.setState(
      current => {
        if(current.rating > 1){
          return {rating: current.rating-1}
        } else if (current.rating <= 1){
          return {rating: 0}
        } 
      }
    );
  }

  componentDidMount() {
    console.log("didmount");
  }

  componentDidUpdate() {
    console.log("didupdate");
  }

  componentWillUnmount() {
    console.log("didunmint");
  }

  render() {
    const {rating,count,name} = this.state

    console.log("render");
    return (
    <div>
      <h3>{name}</h3>
      <div>{rating}/{count}</div>
      <button onClick={this.addCount}>Add</button>
      <button onClick={this.minusCount}>Minus</button>
    </div>
    );
  }
}

export default Test;

Test.propTypess = {
  rating: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired
};