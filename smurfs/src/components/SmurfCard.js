import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const SmurfCard = props => {
  console.log('<SmurfCard /> props: ', props)

  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.smurfData.name}</Card.Header>
        <Card.Meta>
          <span className='date'>J{props.smurfData.age}</span>
        </Card.Meta>
        <Card.Description>
          {props.smurfData.height}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='id badge outline' />
          {props.smurfData.id}
        </a>
      </Card.Content>
      <button onClick={() => props.deleteSmurfData(props.smurfData.id)}>Delete</button>
    </Card>
  )
}

export default SmurfCard