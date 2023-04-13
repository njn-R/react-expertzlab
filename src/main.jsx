import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greeting />
  </React.StrictMode>,
)

function Greeting() {
  return (
    <>
      <Person />
      <Message />
      <h1>This is my first component in Expertz</h1>
    </>
  )
}

const Person = () => <h2>John Mathew</h2>
const Message = () => {return <p>This is a message</p>}
