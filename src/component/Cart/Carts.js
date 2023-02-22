import React, { useEffect, useState } from 'react'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { TotalPrice, CartItem } from '../../Atom/Atom';
import { useRecoilState } from 'recoil';
import { cart_data_Put, cart_data_Del, cart_data_get } from '../../utils/Common';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Carts = () => {

    const [sum, setSum] = useState([])
    const [Totalprice, setTotalPrice] = useRecoilState(TotalPrice)
    const [carItem, setcartItem] = useRecoilState(CartItem)
    const [dis, setdis] = useState(false)

    useEffect(() => {
        cart_data_get(setcartItem)
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        if (carItem.length === 0) {
            setTotalPrice(0)
            setdis(true)
        }else{
            setdis(false)
        }

    }, [carItem])

    const updateItemQuantity = (id, qty) => {
        if (qty < 1) {
            cart_data_Del({ id: id })
        }
        cart_data_Put({ id: id, no_qtn: qty })
        const timer = setTimeout(() => {
            cart_data_get(setcartItem)
        }, 200);
        return () => clearTimeout(timer);

    }

    const removeItem = (id) => {
        cart_data_Del({ id: id })

        const timer = setTimeout(() => {
            cart_data_get(setcartItem)
        }, 200);
        return () => clearTimeout(timer);
    }
    const isempty = () => {
        setdis(true)
        if (carItem.length === 0) {
           toast.error('Your cart is empty', { theme: "dark", autoClose: 2000, });
        }
    }

    useEffect(() => {
        carItem.map((ed) => {
            setSum([]);
            sum.push(ed.totalPrice)
            setTotalPrice(sum.reduce((partialSum, a) => partialSum + a, 0))
        })
    }, [carItem])

    return (

        <div>
            {
                carItem.length > 0 ?
                    (<div className="container cart_table">
                        <div className="table-responsive">
                            <table className="table mt-3" id="myTable">
                                <thead >
                                    <tr>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>image</th>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>product name</th>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>price</th>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>quantity</th>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>action</th>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carItem.map((elm, i) => {
                                            return (
                                                <React.Fragment key={i}>
                                                    <tr>
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
                                                                                <div className="fs-6">${elm.price}</div>
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
                                                                <button type="button" className="quantity_minus" onClick={() => updateItemQuantity(elm.id, (parseInt(elm.no_qtn) - 1))}>
                                                                    <ChevronLeftIcon />
                                                                </button>
                                                                <input type="text" value={elm.no_qtn} disabled className="input-number" />
                                                                <button type="button" className="quantity_plus" onClick={() => updateItemQuantity(elm.id, parseInt(elm.no_qtn) + 1)}>
                                                                    <ChevronRightIcon />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td valign='middle' className='text-uppercase text-center' style={{ color: 'grey', cursor: 'pointer' }}><DeleteOutlineIcon onClick={() => removeItem(elm.id)} /></td>
                                                        <td valign='middle' className='text-uppercase text-center cart_price'>$ {elm.totalPrice}</td>
                                                    </tr>

                                                </React.Fragment>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>) : (
                        <div className=" d-flex flex-column align-items-center">
                            <img src={require('../../assets/cart.png')} style={{ maxWidth: '100%', height: '250px' }} alt="" />
                            <h2 className=' text-capitalize mb-4' style={{ color: "#5f9bf0" }}>your cart is empty</h2>
                            {localStorage.removeItem('Price')}
                        </div>
                    )
            }
            <div className="container cart_total d-flex align-items-center mt-2 justify-content-end">
                <span className=' text-capitalize '>total price :</span>
                <h4 className='mb-0 ms-2'><span id="val" className='text-capitalize'>$ {Totalprice}</span></h4>
            </div>
            <div className="container cart_buttons mt-2 mb-2 d-flex justify-content-between">
                <Link to='/shop'> <button className='f_btn p-2'>continue shopping</button></Link>
                <Link to={dis === true ? '/cart':'/checkout' }> <button className='f_btn p-1' onClick={isempty} > check out</button></Link>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Carts