import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const projectName = "React Project"
  const person = {
    name:"John"
  }
  const profileIsValid = true

  return (
    <div className="App">
      <h1>Let us learn React with {projectName}</h1>
      <p>Username is: {person.name}</p>
      <p>Valid profile: {profileIsValid ? "Yes": "No"}</p>
    </div>
  )
}

export default App
