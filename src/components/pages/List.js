import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const List = ({ expenses }) => (
  <div>
    <ListGroup style={{border: "none !important", outline: "none !important"}} >
      {expenses.map(item => (
        <ListGroupItem key={item.id} style={{padding: "0"}} >
          <div className="d-flex align-items-center justify-content-between">
             <p>{item.name}</p>
             <p>$ {item.amount}</p> 
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List