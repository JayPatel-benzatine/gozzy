import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron'
import Footer from '../component/footer/Footer'
import Scroll from '../component/Scroll Button/Scroll'
import Login from '../component/Login/Login'

const LogIn = () => {
  return (
    <div>
      <MainNav />
      <Jumbotron name='log-in' />
      <Login />
      <Footer />
      <Scroll />
    </div>
  )
}

export default LogIn