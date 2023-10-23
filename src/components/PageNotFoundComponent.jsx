import React from 'react'
import instagram from '../assets/instagram-100.png';

export default function PageNotFoundComponent() {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center vh-100 bg-primary">
        <img src={instagram}/>
        <h1 className="display-1 fw-bold text-white">404</h1>
      </div>
    </React.Fragment>
  )
}
