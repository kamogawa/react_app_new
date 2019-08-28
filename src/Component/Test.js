import React from "react";
import PropsTypes from 'prop-types';

class Test extends React.Component {

  state = {
    count: 10,
    rating: this.props.rating
  };
  
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
  render() {
    const {name} = this.props
    
    return (
    <div>
      <h3>{name}</h3>
      <div>{this.state.rating}/{this.state.count}</div>
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