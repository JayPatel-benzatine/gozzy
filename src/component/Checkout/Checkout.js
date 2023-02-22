import React, { useEffect, useState } from 'react'
import './check.css'
import { AddressList, TotalPrice, CartItem, OrderDetails, TrackItems } from '../../Atom/Atom'
import { useRecoilState, useSetRecoilState } from 'recoil';
import Formdata from '../address/Formdata';
import Add from './Add'
import axios from 'axios';
import { getToken, cart_data_get } from '../../utils/Common';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Address_data_get } from '../../utils/Common';


const Checkout = () => {
  const trackItem = useSetRecoilState(TrackItems)
  const token = getToken();
  const navigate = useNavigate()
  const [carItem, setCartItem] = useRecoilState(CartItem)
  const [order, setorder] = useRecoilState(OrderDetails)
  const [totalpricess, setTotalPrice] = useRecoilState(TotalPrice)
  const [sum, setSum] = useState([])
  const [radioItem, setradioItem] = useState([])
  const [radioAddItem, setradioAddItem] = useState([])
  const [radioTypeItem, setradioTypeItem] = useState([])
  const [discount, setDiscount] = useState(0)
  const [selectedcoupon, setselectedcoupon] = useState('')
  const [edit_data, setedit_data] = useRecoilState(AddressList)

  useEffect(() => {
    cart_data_get(setCartItem);
    Address_data_get(setedit_data)
  }, [])

  useEffect(() => {
    Address_data_get()
  }, [edit_data])

  useEffect(() => {
    if (order.length !== 0) {
      navigate("/order")
    }
  }, [order])

  useEffect(() => {
    carItem.map((ed) => {
      setSum([]);
      sum.push(ed.totalPrice)
      setTotalPrice(sum.reduce((partialSum, a) => partialSum + a, 0))
    })
  }, [carItem])

  const GetCoupon = async () => {
    try {
      let res = await axios(
        {
          method: 'post',
          url: 'http://ecommerceapi.benzatine.com/public/api/check_coupon',
          data: { coupon_code: selectedcoupon },
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      let datas = res.data.data;
      setDiscount(datas.discount_amount);
      toast.success(res.data.message, { theme: "dark", autoClose: 1000, });
    } catch (error) {
      toast.error(error.response.data.message, { theme: "dark", autoClose: 2000, });
      return error.response;
    }

  }
  const PlaceOrder = async () => {
    try {
      let res = await axios(
        {
          method: 'post',
          url: 'http://ecommerceapi.benzatine.com/public/api/placeorder',
          data: {
            address: radioAddItem, address_type: radioTypeItem,
            coupon_code: selectedcoupon, margin: 0, pyment_mode: radioItem
          },
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        }
      );
      let datas = res.data.data;
      trackItem(datas)
      return setorder([datas]);

    } catch (error) {
      console.log(error.response);
      return error.response;
    }

  }

  const handlecoupon = () => {
    GetCoupon()
  }

  const selectcoupon = (e) => {
    setselectedcoupon(e.target.value)
  }

  const handleRadio = (e) => {
    const { checked, value, name } = e.target;
    if (checked) {
      setradioItem(value)
    } else {
      setradioItem(value)
    }
  }
  const handleAddRadio = (e, type) => {
    const { checked, value } = e.target;
    if (checked) {
      setradioAddItem(value)
      setradioTypeItem(type)

    } else {
      setradioAddItem(value)
      setradioTypeItem(type)
    }
  }

  const placeorder = () => {
    if (radioAddItem.length !== 0 && radioItem.length !== 0) {
    setCartItem([])
    setTotalPrice([])
    PlaceOrder()
    toast.success('order palce', { theme: "dark", autoClose: 2000, });
    }else{
      if (radioItem.length === 0){
      toast.error("Please select Payment Method !", { theme: "dark", autoClose: 2000, });
    }else{
      toast.error("Please select Address !", { theme: "dark", autoClose: 2000, });
    }
  }
  }

  return (
    <div>
      {
        carItem.length > 0 ?
          (
            <div className="container cart_table">
              <div className="d-none">
                <Formdata />
              </div>

              <div className="table-responsive">
                <table className="table mt-3">
                  <thead >
                    <tr>
                      <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>image</th>
                      <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>product name</th>
                      <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>price</th>
                      <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>quantity</th>
                      <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      carItem.map((elm, i) => {
                        return (
                          <React.Fragment key={i}>
                            <tr key={i}>
                              <td className='text-center'>
                                <img src={elm.image} style={{ height: '100px', borderRadius: '15px' }} alt="" />
                              </td>
                              <td valign='middle' style={{ color: '#777777' }} className='text-uppercase text-center'>{elm.name}</td>
                              <td valign='middle' className='text-uppercase text-center'>
                                <div className="table_price d-flex flex-column">
                                  {
                                    elm.offerPrice ?
                                      (<>
                                        <span style={{ color: '#777777' }} className={elm.offerPrice ? "fs-5  " : 'd-none'}> ${elm.offerPrice} </span>
                                        <del style={{ color: '#aaaaaa' }} className='ms-1 text-muted '>
                                          <div className="fs-6">{elm.price}
                                          </div>
                                        </del>
                                      </>
                                      ) : (
                                        <>
                                          <div style={{ color: '#777777' }} className="fs-5"> ${elm.price} </div>
                                        </>
                                      )
                                  }
                                </div>
                              </td>
                              <td valign='middle' className=''>
                                <div className="input_group d-flex justify-content-center">
                                  <span>{elm.no_qtn} </span>
                                </div>
                              </td>
                              <td valign='middle' className='text-uppercase text-center'>$ {elm.totalPrice}</td>
                            </tr>
                          </React.Fragment>
                        )
                      })
                    }
                    <tr className='check_total'>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td align='right' >
                        <ul className=' list-unstyled'>
                          <li className=' text-capitalize'>subtotal :</li>
                          <li className=' text-capitalize'>shipping charge : </li>
                          <li className=' text-capitalize'>discount :</li>
                          <li className=' text-capitalize'>total : </li>
                        </ul>
                      </td>
                      <td align='center'>
                        <ul className=' list-unstyled'>
                          <li>$ {totalpricess}</li>
                          <li>$ 0</li>
                          <li>$ {discount}</li>
                          <li>$ {`${totalpricess}` - `${discount}`}</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="container mt-4">
                <div className=" check_mains">
                  <div className=" checkout_left">
                    <span className=' text-capitalize fs-4'>select shipping address</span>
                    <div className="list_address">
                      {
                        edit_data.map((elm, i) => {
                          return (
                            <React.Fragment key={i}>
                              <div className=" details d-flex flex-column p-2" style={{ backgroundColor: "#f9f9f9" }}>
                                <div className="form-check">
                                  <input className="form-check-input"
                                    onChange={(e) => handleAddRadio(e, elm.type)}
                                    value={` ${elm.house_no},${elm.street},${elm.landmark},${elm.city}, ${elm.state},${elm.pin_code}`}
                                    style={{ position: "relative", top: "20px" }}
                                    type="radio" name="flexRadio" id="flexRadioDefault5" required/>
                                  <label className="form-check-label" htmlFor="flexRadioDefault5">
                                    <div className="detail_address">
                                      <h4 className='text-capitalize mt-4 ms-3'>{elm.full_name}</h4>
                                      <h6 className='ms-3 p-0 mt-1 text-uppercase text-muted fw-light d-flex justify-content-between'>
                                        <span>{elm.type}</span>
                                        <span className={(elm.isdefault === "1") ? 'me-2' : 'd-none'} style={{ color: "#7165E3" }} >default</span>
                                      </h6>
                                      <h6 className='ms-3 p-0 mt-2'>{elm.phone}</h6>
                                      <p className=' text-uppercase text-muted fw-light ms-3'>{elm.house_no}, {elm.street}, {elm.landmark}</p>
                                      <p className=' text-uppercase text-muted fw-light ms-3'>{elm.city}, {elm.state}, {elm.pin_code}</p>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </React.Fragment>
                          )
                        })
                      }
                    </div>
                    <button className='f_btn mt-2 mb-2' data-bs-toggle="modal" data-bs-target="#exampleModal">add new address</button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <Add />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="checkout_right">
                    <span className=' text-capitalize fs-4'>payment method</span>
                    <div className="row mt-3 che_option">
                      <div className="pay_method  ">
                        <div className="form-check d-flex align-items-center pt-3 pb-3 mb-3" style={{ background: "#f9f9f9" }}>
                          <input className="form-check-input me-2 "
                            onChange={handleRadio} type="radio"
                            value='COD'
                            name="flexRadioDefault"
                            id="flexRadioDefault1" required/>
                          <label className="form-check-label d-flex align-items-center" htmlFor="flexRadioDefault1">
                            <img className='me-3' src={require('../../assets/monney.png')} alt="" />
                            <span className='text-capitalize'>Cash-On delivery</span>
                          </label>
                        </div>
                        <div className="form-check d-flex align-items-center pt-3 pb-3 mb-3" style={{ background: "#f9f9f9" }}>
                          <input className="form-check-input me-2 "
                            onChange={handleRadio} type="radio"
                            name="flexRadioDefault" id="flexRadioDefault2" required/>
                          <label className="form-check-label d-flex align-items-center" htmlFor="flexRadioDefault2">
                            <img className='me-3' src={require('../../assets/credit.png')} alt="" />
                            <span className='text-capitalize'>online payment</span>
                          </label>
                        </div>
                      </div>

                      <div className="coupon  d-flex  flex-column mt-4">
                        <h6 className=' text-capitalize ps-0'>have a coupon ?</h6>
                        <span className='mt-2 text-capitalize'>add coupon code</span>
                        <div className="d-flex mt-2">
                          <select className="form-control" onChange={selectcoupon}>
                            <option value=" ">--Select--</option>
                            <option value="COUPON10">coupon10</option>
                            <option value="COUPON200">coupon200</option>
                            <option value="COUPON500">coupon500</option>
                          </select>
                          <input type="button" className="f_btn p-2 ms-2" onClick={handlecoupon} value="Apply" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn_check text-end mb-4 mt-5">
                <button className='f_btn me-3 mb-3' onClick={placeorder}>place order</button>
                <button className='f_btn' onClick={() => navigate('/shop')}>cancel</button>
              </div>
            </div>) : (
            <div className=" d-flex flex-column align-items-center">
              <img src={require('../../assets/cart.png')} style={{ maxWidth: '100%', height: '250px' }} alt="" />
              <h2 className=' text-capitalize mb-4' style={{ color: "#5f9bf0" }}>your cart is empty</h2>

            </div>
          )
      }
      <ToastContainer />
    </div>
  )
}

export default Checkout