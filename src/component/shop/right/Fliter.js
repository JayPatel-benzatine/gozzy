import { Rating } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './shopright.css'
import { CartItem } from '../../../Atom/Atom';
import { useRecoilState } from 'recoil';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EmptyList from '../../EmptyList'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import {
  cart_data, getUserId, cart_data_get, getToken,
  wishlist_data
} from '../../../utils/Common'

const Fliter = ({ list }) => {
  const userid = getUserId();
  const [carItem, setcartItem] = useRecoilState(CartItem)
  const token = getToken();
  const navigate = useNavigate()
  useEffect(() => {
    cart_data_get(setcartItem);
    // eslint-disable-next-line 
    
  }, [])

  const addItems = (id, color, size) => {
    if (token === null) {
      navigate('/login')
    }
    if (token !== null) {
      cart_data({ product_id: id, colour: color, no_qtn: 1, user_id: userid, size: size });
      const timer = setTimeout(() => {
        cart_data_get(setcartItem);
      }, 200);
      return () => clearTimeout(timer);
    }
  }

  const addFavItems = (id) => {
    if (token === null) {
      navigate('/login')
    }
    if (token !== null) {
      wishlist_data({ product_id: id, user_id: userid, status: "1" });
      toast.success('Add To Wishlist', { theme: "dark", autoClose: 2000, });

    }
  }
  return (
    <>
      {
        (list.length > 0) ? (
          <div className="list_filter mt-4">
            {
              list.map((elm, i) => {

                return (
                  <React.Fragment key={i}>
                    <div className="F_cards" >
                      <div id='p_cards' className="cards w-100 img_wrapper ">
                        <div className="lable-block">
                          <span className={elm.offerPrice ? "lable_offer " : 'd-none'}>Offer</span>
                          <span className={elm.isonsale === '1' ? "lable_sale" : 'd-none'}>on sale</span>
                        </div>
                        <div className="front">
                          <Link to={`/productDetails/${elm.id}`} >
                            <img key={i} className="img-fluid"
                              src={elm.productImages[0].name} alt='error' />
                          </Link>
                        </div>
                        <div className="product-detail">
                          <div>
                            <div className="m-2">
                              <Rating rating={elm.rating} />
                            </div>
                            <h5 className='m-2 text-capitalize fs-6'>{elm.name}</h5>
                            <h4 className='d-flex ms-2'>
                              {
                                elm.offerPrice ?
                                  (<>
                                    <span className={elm.offerPrice ? "fs-5  " : 'd-none'}> ${elm.offerPrice} </span>
                                    <del className='ms-1 d-flex align-items-center text-muted '><div className="fs-6"> ${elm.price} </div></del>
                                  </>
                                  ) : (
                                    <>
                                      <div className=" fs-5"> ${elm.price} </div>
                                    </>
                                  )
                              }
                            </h4>
                          </div>
                        </div>
                        <div className="menus_filter d-flex flex-column">

                          <ShoppingCartOutlinedIcon className='cart_menu mb-2' onClick={() => addItems(elm.id, elm.colour, elm.size)} />
                          <FavoriteBorderIcon className='Fav_menu' onClick={() => addFavItems(elm.id)} />
                        </div>
                      </div>
                    </div>
                  </React.Fragment>

                )
              })
            }
          </div>
        ) : (<EmptyList />)}
        <ToastContainer />
    </>
  )
}

export default Fliter