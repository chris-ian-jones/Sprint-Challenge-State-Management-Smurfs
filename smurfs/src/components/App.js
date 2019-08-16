import React from "react";
import { connect } from 'react-redux'

import "./App.css";
import SmurfList from './SmurfList'

function App(props) {
  console.log('<App/> props: ', props)
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfList smurfArray={props.smurfArray} />
    </div>
  );
}

const mapPropsToState = state => {
  return state
}

export default connect(mapPropsToState, {})(App)
