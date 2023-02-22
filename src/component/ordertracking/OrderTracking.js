import React, { useEffect, useState } from 'react'
import './order.css'
import { order_data_get,order_data_Put } from '../../utils/Common'
import { useNavigate } from 'react-router-dom'
import {TrackItems} from '../../Atom/Atom';
import { useSetRecoilState} from 'recoil'
const OrderTracking = () => {
    const navigate = useNavigate()
    const [orderData, setorderData] = useState([])
    const [filterData, setfilter] = useState([])
    const [displaye, setdisplaye] = useState('')
    const [toggle, settoggle] = useState(true)
    const trackItem = useSetRecoilState(TrackItems)

    useEffect(() => {
        order_data_get(setorderData)
    }, [toggle])

    useEffect(() => {
        setfilter(orderData)
    }, [orderData])

    const handlecan = (id) => {
        order_data_Put(id)
        settoggle(!toggle)
    }
    const allproduct = () => {
        setdisplaye('')
        setfilter(orderData)
    }

    const Pending = () => {
        setdisplaye('')
        const pendingProduct = orderData.filter((elm) => elm.product_status === 'Pending')
        setfilter(pendingProduct)
    }

    const Deliver = () => {
        setdisplaye('')
        const pendingProduct = orderData.filter((elm) => elm.product_status === 'Delivered')
        setfilter(pendingProduct)
    }

    const Cancel = () => {
        setdisplaye('cancel')
        const pendingProduct = orderData.filter((elm) => elm.product_status === 'Cancelled')
        setfilter(pendingProduct)
    }

    const Process = () => {
        setdisplaye('')
        const pendingProduct = orderData.filter((elm) => elm.product_status !== 'Pending')
        const Cancelleds = pendingProduct.filter((elm) => elm.product_status !== 'Cancelled')    
        const d = Cancelleds.filter((elm) => elm.product_status !== 'Delivered')    
        setfilter(d)
    }
    const navigateTotrack = (item)=>{
        navigate('/track')
        trackItem(item)
    }
    return (
        <>
            <div className='container cat_main'>
                <div className="cat_heading mt-5 text-center">
                    <h1 className='text-uppercase'>your orders</h1>
                </div>
                <div className="order_category d-flex justify-content-center align-items-center mt-4 flex-wrap">
                    <button onClick={allproduct}
                        className="filter_btn text-uppercase me-3 mb-0">all orders</button>
                    <button
                        onClick={Pending}
                        className="filter_btn text-uppercase me-3 mb-0"
                        to="#">pending
                    </button>
                    <button
                        onClick={Process}
                        className="filter_btn text-uppercase me-3 mb-0"
                        to="#">processing</button>
                    <button
                        onClick={Deliver}
                        className="filter_btn text-uppercase me-3 mb-0"
                        to="#">delivered</button>
                    <button
                        onClick={Cancel}
                        className="filter_btn text-uppercase me-3 mb-0"
                        to="#">cancelled</button>
                </div>
                {
                    filterData.length !== 0 ? (
                        <>
                            <div className="table-responsive mt-3 mb-5 table-wrapper-scroll-y my-custom-scrollbar">
                                <table className="table mt-3 " >
                                    <thead >
                                        <tr>
                                            <th style={{ borderBottomColor: 'grey', background: "white" }} scope="col" className=' text-center text-uppercase fw-light sticky-top'>image</th>
                                            <th style={{ borderBottomColor: 'grey', background: "white" }} scope="col" className=' text-center text-uppercase fw-light sticky-top' >product name</th>
                                            <th style={{ borderBottomColor: 'grey', background: "white" }} scope="col" className=' text-center text-uppercase fw-light sticky-top'>price</th>
                                            <th style={{ borderBottomColor: 'grey', background: "white" }} scope="col" className=' text-center text-uppercase fw-light sticky-top'>quantity</th>
                                            <th style={{ borderBottomColor: 'grey', background: "white" }} scope="col" className=' text-center text-uppercase fw-light sticky-top'>payment mode</th>
                                            <th style={{ borderBottomColor: 'grey', background: "white" }} scope="col" className=' text-center text-uppercase fw-light sticky-top'>date</th>
                                            <th style={{ borderBottomColor: 'grey', background: "white" }} scope="col" className=' text-center text-uppercase fw-light sticky-top'>status</th>
                                            <th style={{ borderBottomColor: 'grey', background: "white" }} scope="col"
                                                className={displaye === 'cancel' ? ('d-none') : ' text-center text-uppercase fw-light sticky-top'}>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filterData.map((elm, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        <tr>
                                                            <td className='text-center'>
                                                                <img src={elm.image} style={{ height: '100px', borderRadius: '15px' }} alt="" />
                                                            </td>
                                                            <td valign='middle' style={{ color: '#777777' }} className='text-uppercase text-center'>{elm.name}</td>
                                                            <td valign='middle' className='text-uppercase text-center'>${elm.price}</td>
                                                            <td valign='middle' className='text-uppercase text-center'>{elm.quantity}</td>
                                                            <td valign='middle' className='text-uppercase text-center'>{elm.pyment_mode}</td>
                                                            <td valign='middle' className='text-uppercase text-center'>{elm.order_date}</td>
                                                            <td valign='middle' className='text-uppercase text-center'>{elm.product_status}</td>
                                                            <td valign='middle' className={displaye === 'cancel' ? ('d-none') : 'text-uppercase text-center d-flex flex-column align-items-center'} style={{ color: 'grey', cursor: 'pointer', paddingBottom: '28px' }}>
                                                            <span className={elm.product_status === 'Cancelled' ? 'mt-5 mb-3':'d-none'}> Product cancelled</span>
                                                                <img src={require('../../assets/t.png')} className={elm.product_status === 'Cancelled' ? 'd-none':'p-1'} onClick={()=>navigateTotrack(elm)} style={{ width: "40px", height: "40px" }} alt="" />
                                                                <img src={require('../../assets/cancel.png')} className={elm.product_status === 'Cancelled' ? 'd-none':'p-2'} onClick={()=>handlecan(elm.id)} style={{ width: "40px", height: "40px" }} alt="" />
                                                            </td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : (
                        <h1 className=' text-capitalize text-muted text-center mt-5 mb-5'>there is no orders</h1>
                    )
                }

            </div>

        </>
    )
}

export default OrderTracking