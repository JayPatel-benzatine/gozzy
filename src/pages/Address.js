import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron'
import Footer from '../component/footer/Footer'
import Addres  from '../component/address/Addres'
import Scroll from '../component/Scroll Button/Scroll'

const Address = () => {
  return (
    <div>
        <MainNav />
        <Jumbotron name='my address'/>
        <Addres />
        <Footer />
        <Scroll />
    </div>
  )
}

export default Address