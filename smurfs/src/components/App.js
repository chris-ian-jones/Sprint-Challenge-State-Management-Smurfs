import React from "react";
import { connect } from 'react-redux'

import "./App.css";
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import { getSmurfData, addSmurfData, deleteSmurfData } from './../actions'

function App(props) {
  console.log('<App/> props: ', props)
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfForm addSmurfData={props.addSmurfData}/>
      <button onClick={props.getSmurfData}>Get Smurf Data!</button>
      <SmurfList smurfArray={props.smurfArray} deleteSmurfData={props.deleteSmurfData}/>
    </div>
  );
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { getSmurfData, addSmurfData, deleteSmurfData })(App)
