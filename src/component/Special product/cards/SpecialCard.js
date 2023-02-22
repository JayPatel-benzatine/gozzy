import React, { useEffect, useState } from 'react'
import './SpecialCards.css';
import { useRecoilValue, useRecoilState } from 'recoil'
import { fetchUserData } from '../../../Atom/Selector'
import { specialProduct,CartItem,filterProduct } from '../../../Atom/Atom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { cart_data, getUserId, getToken,cart_data_get,wishlist_data } from '../../../utils/Common'
import axios from 'axios';

const SpecialCard = () => {
    const navigate = useNavigate()
    const userid = getUserId();
    const token = getToken();
    const [carItem, setcartItem] = useRecoilState(CartItem)
    const ProductDetails = useRecoilValue(fetchUserData);
    const [Productatom, setProductAtom] = useRecoilState(specialProduct);
    const [filteratom, setFilterAtom] = useRecoilState(filterProduct);
    const [isAnimate, setIsAnimate] = useState(true)

    const cart_data_Get = async () => {
        try {
          let res = await axios(
            {
              method: 'get',
              url: 'http://ecommerceapi.benzatine.com/public/api/cartList',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            }
          );
          let datas = res.data.data;
          setcartItem(datas);
          return;
        } catch (error) {
          return error.response;
        }
    
      }

    useEffect(() => {
        setProductAtom(ProductDetails)
        const timer = setTimeout(() => {
            document.getElementById("jbtn").click();
        }, 200);
        return () => clearTimeout(timer);
        // eslint-disable-next-line 
    }, [Productatom])

    useEffect(() => {
        cart_data_get(setcartItem);
      }, [])
   
    const handleproducts = () => {
        setFilterAtom(Productatom.products)
        setIsAnimate(!isAnimate)
    }

    const handlebestSelling = () => {
        const bs_data = Productatom.bestSelling
        setFilterAtom('')
        setFilterAtom(bs_data)
        setIsAnimate(!isAnimate)
    }
    const handlefeatured = () => {
        const f_data = Productatom.featured
        setFilterAtom('')
        setFilterAtom(f_data)
        setIsAnimate(!isAnimate)

    }
    const handleonsale = () => {
        const S_data = Productatom.onsale
        setFilterAtom('')
        setFilterAtom(S_data)
        setIsAnimate(!isAnimate)
    }

    const addItems = (id, color, size) => {
        if (token === null) {
            navigate('/login')
          }
        cart_data({ product_id: id, colour: color, no_qtn: 1, user_id: userid, size: size });
        const timer = setTimeout(() => {
          cart_data_Get()
        }, 200);
        return () => clearTimeout(timer);
    
      }

      const addFavItems = (id) => {
        wishlist_data({ product_id: id,user_id: userid ,status : "1"});
      }
    
    return (
        <div className='container'>
            <div className="special_category">
                <ul className=' d-flex justify-content-center  navs  nav-pills'>
                    <li >
                        <button id='jbtn' className='category_btn' onClick={() => handleproducts('products')} >new products </button>
                    </li>
                    <li>
                        <button className='category_btn' onClick={handlebestSelling}>best salers</button>
                    </li>
                    <li><button className='category_btn' id='btn_demo' onClick={handlefeatured}>featured products</button> </li>
                    <li><button className='category_btn' onClick={handleonsale}>on sale</button> </li>
                </ul>
                <div className="P_cards ">
                    {
                        (filteratom.length === 0) ? <h2>Loading</h2> :
                            filteratom.map((elm, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <div id='p_cards' className={isAnimate ? "cards w-100 img_wrapper animate__animated animate__zoomInLeft animate__faster "
                                            : 'animate__animated animate__zoomIn '}>
                                            <div className="lable-block">
                                                <span className={elm.offerPrice ? "lable3 ng-star-inserted  " : 'd-none'}>Offer</span>
                                                <span className={elm.isonsale === '1' ? "lable4 ng-star-inserted  " : 'd-none'}>on sale</span>
                                            </div>
                                            <div className="front">
                                                <Link to={`/productDetails/${elm.id}`} >
                                                    <img className="img-fluid lazy-loading  ng-star-inserted ng-lazyloaded"
                                                        alt='' src={elm.productImages[0].name} />
                                                </Link>
                                            </div>

                                            <div className="product-detail">
                                                <div>
                                                    <div className=" m-2 br-readonly ">

                                                        <StarBorderIcon />
                                                        <StarBorderIcon />
                                                        <StarBorderIcon />
                                                        <StarBorderIcon />
                                                        <StarBorderIcon />

                                                    </div>
                                                    <h5 className='m-2 text-capitalize fs-6 '>{elm.name}</h5>

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
                                            <div className="menus d-flex flex-column">
                                                <ShoppingCartOutlinedIcon className='cart_menu mb-2' onClick={() => addItems(elm.id, elm.colour, elm.size)} />
                                                <FavoriteBorderIcon className='Fav_menu' onClick={() => addFavItems(elm.id)} />
                                            </div>
                                        </div>

                                    </React.Fragment>
                                )
                            })
                    }
                </div>


            </div>
        </div>
    )
}

export default SpecialCard