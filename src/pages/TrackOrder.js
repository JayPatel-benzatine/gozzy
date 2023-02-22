import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron'
import Footer from '../component/footer/Footer'
import TrackOrders from '../component/track/TrackOrders';
import Scroll from '../component/Scroll Button/Scroll'

const TrackOrder = () => {
  return (
    <div className='bank'>
    <MainNav />
    <Jumbotron name='track orders' />
    <TrackOrders />
    <Footer />
    <Scroll />
</div>
  )
}

export default TrackOrder