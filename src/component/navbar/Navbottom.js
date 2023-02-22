import React, { useEffect } from 'react'
import './Navbottom.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, NavLink } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { categoreyLists } from '../../Atom/Selector'
import { categoreyList, CartItem } from '../../Atom/Atom'

const NavBottom = () => {
    const Categories_List = useRecoilValue(categoreyLists);
    const TotalCartItem = useRecoilValue(CartItem);
    const [category, setCategorey] = useRecoilState(categoreyList);

    useEffect(() => {
        setCategorey(Categories_List)
        // eslint-disable-next-line 
    }, [Categories_List])

    return (
        <>
            <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light navbar_top ">
                <div className="container">
                    <div className="left">
                        <div className="footer-logo"><img src={require('../../assets/Logo.png')} alt="Images" /></div>
                    </div>
                    <div className="right_cart">
                        <button className="navbar-toggler hamburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <button className="navbar-toggler side_btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                BACK<ChevronRightIcon />
                            </button>
                            <hr className='mt-5' />

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink
                                        style={({ isActive }) => (isActive ? { color: '#7165e3' } : { color: 'grey' })}
                                        className="nav-link me-3"
                                        aria-current="page"
                                        to="/">Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        style={({ isActive }) => (isActive ? { color: '#7165e3' } : { color: 'grey' })}
                                        className="nav-link me-3"
                                        to="/shop">SHOP</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle me-3" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                        CATAGORY
                                    </Link>
                                    <ul className="dropdown-menu fade-up" >
                                        {
                                            category.map((elm, i) => {
                                                return (<li key={i}><Link className="dropdown-item " to={`/category/${elm.name}/${elm.id}`}>{elm.name}</Link></li>)
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle me-3" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                        ORDER
                                    </Link>
                                    <ul className="dropdown-menu fade-up" >
                                        <li><Link className="dropdown-item" to="/cart">CART</Link></li>
                                        <li><Link className="dropdown-item" to="/favroite"> WISHLISTS</Link></li>
                                        <li><Link className="dropdown-item" to="/ordertrack"> MY ORDER</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="me-3 nav-link dropdown-toggle"
                                        to="#"
                                        id="navbarDropdownMenuLink"
                                        data-toggle="dropdown">
                                        ACCOUNT
                                    </Link>
                                    <ul className="dropdown-menu fade-up" >
                                        <li><Link className="dropdown-item" to="/profile">PROFILE</Link></li>
                                        <li><Link className="dropdown-item" to="/bank"> MY BANK-DETAILS</Link></li>
                                        <li><Link className="dropdown-item" to="/address"> MY ADDRESS</Link></li>
                                        <li><Link className="dropdown-item" to="/notification"> NOTIFICATIONS SETTINGS</Link></li>
                                    </ul>
                                </li>


                                <li className="nav-item">
                                    <NavLink
                                        style={({ isActive }) => (isActive ? { color: '#7165e3' } : { color: 'grey' })}
                                        className="nav-link me-3"
                                        to="/about">ABOUT-US
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        style={({ isActive }) => (isActive ? { color: '#7165e3' } : { color: 'grey' })}
                                        className="nav-link me-3"
                                        to="/contact">CONTACT</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-item dropdown d-flex mb-1">
                            <Link to='/cart' className=' me-0'> <div className="delte d-flex align-items-center h-auto" data-toggle="dropdown">
                                <LocalGroceryStoreOutlinedIcon />
                                <span className="cart_qty_cls">{TotalCartItem.length}</span>
                            </div>
                            </Link>
                            <ul className="dropdown-menu fade-up cart_ul">
                                {
                                    (TotalCartItem.length < 1) ?
                                        (<li><p className="dropdown-item"> Your cart is currently empty.</p></li>)
                                        : (
                                            <>
                                                <ul className='cart_list'>
                                                    {
                                                        TotalCartItem.map((elem, i) => {
                                                            return (
                                                                <React.Fragment key={i}>
                                                                    <div className='d-flex'>
                                                                        <li className='col-6 ms-2 h-75'><img src={elem.image} className='w-75 h-100 rounded-3' alt="" /></li>
                                                                        <li className='col-6 ms-2 h-75'>
                                                                            <div className="name_price h-75 d-flex flex-column justify-content-center">
                                                                                <ul className=' list-unstyled'>
                                                                                    <li className=' text-capitalize'>{elem.name}</li>
                                                                                    <li style={{ color: "grey" }}>{elem.no_qtn} <span>x</span> {elem.price}</li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>

                                                                    </div>
                                                                </React.Fragment>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </>
                                        )
                                }
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBottom