import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FaxIcon from '@mui/icons-material/Fax';
import { Link } from 'react-router-dom';
const FooterBottom = () => {
  return (
    <div>

      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="footer">
          <div className="container text-center text-md-start ">
            <div className="row mt-3 fotter_row">

              <div className=" main  ">
                <div className="footer-logo"><img src={require('../../assets/Logo.png')} alt="Images" /></div>
                <div className="footer-title">
                  <h5 className="text-uppercase  mb-1">
                    ONLINE SHOPPING MADE EASY BY GOOZZY
                  </h5>
                </div>
                <p className='footer_paragrah'>Goozzy is the ultimate destination for fashion and lifestyle. It is time to redefine your style statement with our treasure-trove of trendy items. You can shop online at Goozzy from the comfort of your home and get your favourites delivered right to your doorstep.</p>

                <div className="footer-social">
                  <p> <a href="https://www.facebook.com/"><FacebookIcon className='icon' /></a></p>
                  <p> <a href="https://www.google.com/"><GoogleIcon className='icon' /></a></p>
                  <p><a href="https://twitter.com/i/flow/login"><TwitterIcon className='icon' /></a></p>
                  <p> <a href="https://www.instagram.com/accounts/login/"><InstagramIcon className='icon' /></a></p>
                  <p><a href="https://rss.com/"><RssFeedIcon className='icon' /></a></p>

                </div>
              </div>

              <div className="sub-title categories  ">
                <div className="footer-title ">
                  <h4 className=" text-uppercase fw-bold mb-1">
                    CATEGORIES
                  </h4>
                </div>
                <div className="footer-content">
                  <p>
                    <Link to='/category/Women/5' className="text-reset">Womens Fashion</Link>
                  </p>
                  <p>
                    <Link to="/category/Men/6" className="text-reset">Mens Fashion</Link>
                  </p>
                  <p>
                    <Link to="/category/Kids/8" className="text-reset">Kids Fashion</Link>
                  </p>
                </div>
              </div>

              <div className="sub-title choose ">
                <div className="footer-title">
                  <h4 className="text-uppercase fw-bold mb-1">
                    why we choose
                  </h4>
                </div>
                <div className="footer-content">
                  <p>
                    <Link to="#!" className="text-reset">shipping & return</Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-reset">secure shopping</Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-reset">gallary</Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-reset">affiliates</Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-reset">contacts</Link>
                  </p>
                </div>
              </div>

              <div className="sub-title contact  mb-4">
                <div className="footer-title">
                  <h4 className="text-uppercase fw-bold mb-1">
                   STORE INFORMATION
                  </h4>
                </div>

                <div className="footer-content">
                  <ul className='d-flex list-unstyled pt-2 pb-2'>
                    <li className='me-2'><LocationOnIcon /></li>
                    <li><span>New York, NY , US.</span> </li>
                  </ul>
                  <ul className='d-flex list-unstyled pt-2 pb-2'>
                    <li className='me-2'><CallIcon /></li>
                    <li><span> info@example.com</span> </li>
                  </ul>
                  <ul className='d-flex list-unstyled pt-2 pb-2'>
                    <li className='me-2'><MailOutlineIcon /></li>
                    <li> <span>Support@Fiot.com</span></li>
                  </ul>
                  <ul className='d-flex list-unstyled pt-2 pb-2'>
                    <li className='me-2'><FaxIcon /></li>
                    <li> <span>+ 01 234 567 89</span></li>
                  </ul>

                </div>

              </div>

            </div>
          </div>
        </section>

      </footer>
    </div>
  )
}

export default FooterBottom