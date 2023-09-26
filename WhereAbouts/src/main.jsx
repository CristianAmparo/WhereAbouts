import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'
import UserList from './sample'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <UserList />
  </React.StrictMode>,
)
