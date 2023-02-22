import React from 'react'
import './Catelogs.css'
const Catelogs = () => {
  return (
    <div className='container catalogs'>
      <section className='service border-section small-section'>
        <div className="service-block">
          <div className="media ">
            <img className='truck' src={require('../../assets/truck.png')} alt="" />
            <div className="media-body ms-3">
              <h4>free shipping</h4>
              <p>free shipping world wide</p>
            </div>
          </div>
        </div>
        <div className="service-block">
          <div className="media">
            <img className='truck' src={require('../../assets/hours.png')} alt="" />
            <div className="media-body ms-3">
              <h4>24 X 7 service</h4>
              <p>Online Service For New Customer</p>
            </div>
          </div>
        </div>
        <div className="service-block">
          <div className="media annouce">
            <img className='truck ' src={require('../../assets/promotion.png')} alt="" />
            <div className="media-body ms-3">
              <h4>festival offer</h4>
              <p>New Online Special Festival Offer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catelogs