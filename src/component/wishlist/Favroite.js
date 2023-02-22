import React, { useEffect } from 'react'
import './fav.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link, useNavigate } from 'react-router-dom';

import { WishlistItem, } from '../../Atom/Atom';
import { useRecoilState } from 'recoil';
import { wishlist_data_get, wishlist_data_Del } from '../../utils/Common';

const Favroite = () => {
    const navigate=useNavigate()
    const [favItem, favcartItem] = useRecoilState(WishlistItem)

    useEffect(() => {
        wishlist_data_get(favcartItem)
        // eslint-disable-next-line 
    }, [])

    const handleremove = (id) => {
        wishlist_data_Del({ id: id })

        const timer = setTimeout(() => {
            wishlist_data_get(favcartItem)
        }, 200);
        return () => clearTimeout(timer);
    }

    return (
        <>
            {
                (favItem.length > 0) ?
                    (
                        <div className="container cart_table">
                            <div className="table-responsive">
                                <table className="table mt-3">
                                    <thead >
                                        <tr>
                                            <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>image</th>
                                            <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>product name</th>
                                            <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>price</th>
                                            <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            favItem.map((elm, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        <tr>
                                                            <td className='text-center'>
                                                                <img src={elm.image} style={{ height: '100px', borderRadius: '15px' }} alt="" />
                                                            </td>
                                                            <td valign='middle' style={{ color: '#777777' }} className='text-uppercase text-center'><Link to={`/productDetails/${elm.product_id}`} >{elm.name}</Link></td>
                                                            <td valign='middle' className='text-uppercase text-center'>
                                                                <div className="table_price d-flex flex-column">
                                                                    {
                                                                        elm.offerPrice ?
                                                                            (<>
                                                                                <span style={{ color: '#777777' }} className={elm.offerPrice ? "fs-5  " : 'd-none'}> ${elm.offerPrice} </span>
                                                                                <del style={{ color: '#aaaaaa' }} className='ms-1 text-muted '><div className="fs-6">{elm.price}</div></del>
                                                                            </>
                                                                            ) : (
                                                                                <>
                                                                                    <div style={{ color: '#777777' }} className="fs-5"> ${elm.price} </div>
                                                                                </>

                                                                            )

                                                                    }
                                                                </div>
                                                            </td>
                                                            <td valign='middle' className='text-uppercase text-center' style={{ color: 'grey', cursor: 'pointer' }}><DeleteOutlineIcon onClick={() => handleremove(elm.id)} /></td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>) :
                    (<>
                        <div className=" d-flex flex-column align-items-center">
                            <img src={require('../../assets/cart.png')} style={{ maxWidth: '100%', height: '250px' }} alt="" />
                            <h2 className=' text-capitalize mb-4' style={{ color: "#5f9bf0" }}>your cart is empty</h2>
                        </div>
                    </>
                    )
            }
            <div className="container cart_buttons mt-2 mb-2 d-flex justify-content-between">
                <Link to='/shop'> <button className='f_btn p-2'>continue shopping</button></Link>
                <button className='f_btn p-1' onClick={()=>navigate('/cart')}> cart</button>
            </div>
        </>
    )
}

export default Favroite