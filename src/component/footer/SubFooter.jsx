import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import {Link} from 'react-router-dom'
import visa from "../../assets/visa.png"
const SubFooter = () => {
    return (
        <>
            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="copywrite col-xl-6 col-md-6 col-sm-12">
                            <div className="footer-end">
                                <p><CopyrightIcon className='fa' /> 2022-23 powered by Benzatine
                                    </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="payment-card-bottom">
                                <ul>
                                    <li>
                                        <Link to="#"><img src={visa} alt="" /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><img src={require('../../assets/mastercard.png')} alt="" /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><img src={require('../../assets/paypal.png')} alt="" /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><img src={require('../../assets/americanexpress.png')} alt="" /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><img src={require('../../assets/pay.png')} alt="" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubFooter