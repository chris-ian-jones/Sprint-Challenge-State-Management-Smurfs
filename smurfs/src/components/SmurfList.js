import React from 'react'
import SmurfCard from './SmurfCard'

const SmurfList = props => {
  console.log('<SmurfList /> props: ', props)
  return (
    <>
      <h1>List of smurfs!</h1>
      {props.smurfArray.map(smurf => <SmurfCard key={smurf.id} smurfData={smurf} />)}
    </>
  )
}

export default SmurfList