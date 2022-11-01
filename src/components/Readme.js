import React from 'react'
import './Readme.css'

export default function Readme() {
  return (
    <div className='readme'>
      <div>
        <h2>Getting started  with Create React App</h2>
      </div>

      <div>
        <p>This project is bootstraped with create react app</p>
        <h3>Getting started  with Create React App</h3>
      </div>

      <div>
        <p>In this project you can run:</p>
        <h2>Npm Start</h2>
        <p>runs the app development mode.<br/>
        open bla blabla.com</p>
        <p>The page will make reload after every edits </p>
        <p>you will also see limits in the error console</p>
      </div>

      <div>
        <h2>Npm Test</h2>
        <p>Launches the test runner in the interactive watch mode.</p>
        <p>see the section about running tests for more info</p>
      </div>
    </div>
  )
}
