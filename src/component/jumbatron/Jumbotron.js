import React from 'react'
import './jumbotron.css'
import { Link} from 'react-router-dom'
const Jumbotron = ({name}) => {
  
  return (
    <div className='jumbotron'>
      <div className="container jumb d-flex  justify-content-between align-items-center">
        <div className="left_jumb">
          <h2>{name}</h2>
        </div>
        <div className="right_jumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{name}</li>
          </ol>
        </div>
      </div>
    </div>

  )
}

export default Jumbotron