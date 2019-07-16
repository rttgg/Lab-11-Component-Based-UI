import React from 'react';
import './App.css';
//DONE: import react fragment

class App extends React.Component {
  
      constructor(props) {
        super(props);
        this.state = {
          clicks: 0
         
        };
      }
      render() {
        return (
          <React.Fragment>
            <p>you clicked {this.state.clicks} times</p>
            
            <button onClick={() => this.setState({ clicks: this.state.clicks + 1 })}> click Me (+) </button>
            <button onClick={() => this.setState({ clicks: this.state.clicks - 1 })}>click Me (-) </button>
            </React.Fragment>
      
      //DONE: create counter.
      //DONE counter should contain state: this.state = { count: 0};
      //DONE state should be changed based on clicks to the increment/decroment btns.
      //DONE: state changes should be updated in the p tag.
      
    //DONE add p element to show current number of clicks. Starts at zero *<p>0</p>
    //DONE: add buttons, increment and decroment (+, -)  
    //     
    )
  }
}
export default App;
