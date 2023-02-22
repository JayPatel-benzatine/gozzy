import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron'
import Footer from '../component/footer/Footer'
import Scroll from '../component/Scroll Button/Scroll'
import Checkout from '../component/Checkout/Checkout'

const CheckoutPage = () => {
  return (
    <div>
      <MainNav />
      <Jumbotron name='checkout' />
      <Checkout />
      <Footer />
      <Scroll />
    </div>
  )
}

export default CheckoutPage