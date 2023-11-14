import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <ul>
          <Link to='/'><li>All</li></Link>
          <Link to='/categories/t-shirts'><li>Remera</li></Link>
          <Link to='/categories/divers'><li>Buzos</li></Link>
          <Link to='/categories/sweaters'><li>Sweaters</li></Link>
          <Link to='/categories/joggings'><li>Jogging</li></Link>
          <Link to='/categories/shorts'><li>Shorts</li></Link>
        </ul>
    </div>
  )
}
