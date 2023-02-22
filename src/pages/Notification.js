import React from 'react'
import Jumbotron from '../component/jumbatron/Jumbotron';
import MainNav from '../component/navbar/MainNav';
import Footer from '../component/footer/Footer';
import Notifications from '../component/notification/Notifications';
import Scroll from '../component/Scroll Button/Scroll'

const Notification = () => {
  return (
    <div>
      <MainNav />
      <Jumbotron name='settings' />
      <Notifications />
      <Footer />
      <Scroll />
    </div>
  )
}

export default Notification