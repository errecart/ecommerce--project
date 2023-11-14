import React from 'react'
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemsCard({data}) {
  
  return (
    <Card className='cards col-md-4'>
      <div className="cards-img">
        <Card.Img variant="top" src={data.image} className='img'/>
      </div>
      <Card.Body>
        <div className="card-body">
          <Card.Title>
            <h3>{data.name}</h3>
          </Card.Title>
          <div className='cards-items'>            
            <p><span>Brand:</span> {data.brand}</p>
            <p><span>Color:</span> {data.color}</p>
          </div>
          <Link to={`/details/${data.id}`}>
            <button>Info</button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}
