import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import CardGroup   from 'react-bootstrap/CardGroup'
import data from '../data/data.json'
const dataMap = data.map( (data) =>{
    return(
        <Card key={data.id}>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
               {data.email}
            </Card.Text>
            <a className="btn-primary">
              href={data.url}
            </a>
          </Card.Body>
        </Card>
    )
  }
)
export default class Body extends Component {
  render() {
    return (
      <CardGroup className="m-3 p-3">{dataMap}</CardGroup>
    )
  }
}
