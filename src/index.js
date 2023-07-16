import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import StarRating from './StarRating'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} message={['ok', 'good', '3', '4', '5']} defaulRating={3} /> */}
  </React.StrictMode>
);


