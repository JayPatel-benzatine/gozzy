import React from 'react'
import './Address.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FaxIcon from '@mui/icons-material/Fax';
const Address = () => {
    return (
        <div className='container maps'>
            <div className="add_left mb-5">
                <iframe
                 title="Google_map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9805239890816!2d72.83374197990189!3d21.23262088623114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ec5b19d0e3f%3A0x5b70a36a0e8752c6!2sBenzatine%20Infotech!5e0!3m2!1sen!2sin!4v1657001497909!5m2!1sen!2sin"
                    width="700" height="450"
                    style={{ borderRadius: '15px'}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="add_right mt-3 mb-3">
                <div className="contact-right">
                    <ul>
                        <li className='mt-1'>
                            <div className="contact-icon">
                                <LocalPhoneIcon />
                                <h6 >Contact Us</h6>
                            </div>
                            <div className="media-body">
                                <p>+91 123 - 456 - 7890</p>
                                <p>+86 163 - 451 - 7894</p>
                            </div>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <AddLocationIcon />
                                <h6>Address</h6>
                            </div>
                            <div className="media-body">
                                <p >ABC Complex,Near xyz, New York</p>
                                <p >USA 123456</p>
                            </div>
                        </li>
                        <li >
                            <div className="contact-icon">
                                <MailOutlineIcon />
                                <h6>Address</h6>
                            </div>
                            <div className="media-body">
                                <p >Support@Shopcart.com</p>
                                <p >info@shopcart.com</p>
                            </div>
                        </li>
                        <li >
                            <div className="contact-icon">
                            <FaxIcon />
                                <h6 >Fax</h6></div>
                            <div className="media-body">
                                <p >Support@Shopcart.com</p>
                                <p >info@shopcart.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Address