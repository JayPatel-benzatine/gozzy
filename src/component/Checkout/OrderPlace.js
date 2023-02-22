import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { OrderDetails } from '../../Atom/Atom'
import { useRecoilState } from 'recoil';
import './check.css'
import { useNavigate } from 'react-router-dom';
import { TrackItems } from '../../Atom/Atom';
import { useRecoilValue } from 'recoil'
const OrderPlace = () => {
  const [order, setorder] = useRecoilState(OrderDetails)
  const trackItem = useRecoilValue(TrackItems)
  const navigate = useNavigate()

  const handlepush = () => {
    setorder([])
    navigate('/track')
  }

  return (
    <div>
      {
        order.length !== 0 ?
          (<>
            {
              order.map((elm, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="container-fuild mt-3">
                      <div className="mt-4 p-5 bg-light text-center">
                        <CheckCircleIcon style={{ color: "green", width: "95px", height: "40px" }} />
                        <h1 className='mt-2 text-uppercase'>thank you</h1>
                        <p className=' text-capitalize text-muted'>your order placed successfully and it will be delivered soon</p>
                      </div>
                      <div className="mainsummery d-flex justify-content-center">
                        <div className="summery mt-2 me-5 ">
                          <h5 className=' text-capitalize mt-2'>summery</h5>
                          <ul className=' list-unstyled'>
                            <div className=" d-flex">
                              <li className=' text-capitalize me-2'>order id : </li>
                              <li className=' text-muted'>{elm.order_code}</li>
                            </div>
                            <div className=" d-flex">
                              <li className=' text-capitalize me-2'>order date : </li>
                              <li className=' text-muted'>{elm.order_date.slice(0, 10)}</li>
                            </div>
                            <div className=" d-flex">
                              <li className=' text-capitalize me-2'>order total : </li>
                              <li className=' text-muted'>$ {elm.total_price}</li>
                            </div>
                          </ul>
                        </div>
                        <div className=" shipping mt-4 w-50">
                          <h5 className=' text-capitalize'>shipping address</h5>
                          <h6 className=' ps-0 fw-light text-muted'>{elm.address}</h6>
                        </div>
                      </div>

                      <div className="tacker d-flex justify-content-center" >
                        <div className="w-50 bg-light text-center mt-3 mb-4  p-3">
                          <div className="shipping mt-2 mb-2 ms-3">
                            <h5 className=' text-capitalize'>payment method</h5>
                            <h6 className=' ps-0 fw-light text-muted'>{elm.pyment_mode}</h6>
                          </div>
                          <button className='f_btn ' onClick={handlepush}>track order</button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })
            }
          </>) :
          (
            <div className=" d-flex flex-column align-items-center">
              <img src={require('../../assets/cart.png')} style={{ maxWidth: '100%', height: '250px' }} alt="" />
              <h2 className=' text-capitalize mb-4' style={{ color: "#5f9bf0" }}>your cart is empty</h2>
            </div>
          )
      }

    </div>
  )
}

export default OrderPlace