import React, { useEffect, useState } from 'react'
import './Navtop.css'
import PhoneIcon from '@mui/icons-material/Phone';
import Search from './Search'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { getToken, removeUserSession } from "../../utils/Common";
import { ProfileDetails } from '../../Atom/Atom'
import { useRecoilValue } from 'recoil';

const NavTop = () => {
    const token = getToken();
    const [username, setusername] = useState('')
    const datas=useRecoilValue(ProfileDetails)
    
    
    useEffect(() => {
        setusername(localStorage.getItem('name'))
         setTimeout(() => {
            setusername(localStorage.getItem('name'))
        }, 1000);
    }, [username,datas])


    const handleLogout = () => {
        localStorage.removeItem('name')
        localStorage.removeItem('code')
        localStorage.removeItem('number')
        removeUserSession();
    };
    
    return (
        <header className="top_header bg-light">
            <div className="container content">
                <div className="left">
                    <h6>Welecome to Our Gozzy Store</h6>
                    <p className='d-flex align-items-center '><PhoneIcon className='phone_icon' />Call Us : 123-4456-7890</p>
                </div>
                <div className="right d-flex align-items-center">
                    <Search />
                    <div className="nav-item dropdown">
                        <div className="user d-flex" data-toggle="dropdown">
                            <PersonIcon className='user_dp' />
                            {
                            (username === null) || (username === 'null') || (username === 'undefined')?
                            <span>My Account</span>:
                            <span>{username}</span> 

                            }
                        </div>
                        <ul className="dropdown-menu fade-up">
                            {
                                token ? (
                                    <li><Link className="dropdown-item" to="/login"  onClick={handleLogout}> Log Out</Link></li>
                                ) : (
                                    <li><Link className="dropdown-item" to="/login"> Log In</Link></li>
                                )
                            }
                        </ul>
                    </div>
                </div>


            </div>

        </header>
    )
}

export default NavTop