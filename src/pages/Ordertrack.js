import React from 'react'
import MainNav from '../component/navbar/MainNav';
import Footer from '../component/footer/Footer';
import OrderTracking from '../component/ordertracking/OrderTracking';
import Scroll from '../component/Scroll Button/Scroll'
import Jumbotron from '../component/jumbatron/Jumbotron';

const Ordertrack = () => {
  return (
    <div>
    <MainNav />
      <Jumbotron name='orders' />
      <OrderTracking />
      <Footer />
      <Scroll />
  </div>
  )
}

export default Ordertrack