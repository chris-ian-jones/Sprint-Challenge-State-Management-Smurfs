import React from 'react'

const SmurfCard = props => {
  console.log('<SmurfCard /> props: ', props)
  return (
    <>
      <p>Name: {props.smurfData.name}</p>
      <p>Age: {props.smurfData.age}</p>
      <p>Height: {props.smurfData.height}</p>
      <p>Id: {props.smurfData.id}</p>
    </>
  )
}

export default SmurfCard