
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export default function Footer() {
  return (
    <div className='footer-container'>
      <p>This is my own non-profit project. if you want to see more: <a href="https://github.com/errecart" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></p>
    </div>
  )
}
