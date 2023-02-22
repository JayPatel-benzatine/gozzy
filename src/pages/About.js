import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Footer from '../component/footer/Footer'
import Catelogs from '../component/cateloges/Catelogs'
import Jumbotron from '../component/jumbatron/Jumbotron'
import Abouts from '../component/about/Abouts'
import Scroll from '../component/Scroll Button/Scroll'

const About = () => {
  return (
    <>
      <MainNav />
      <Jumbotron name='about-us' />
      <Abouts />
      <Catelogs />
      <Footer />
      <Scroll />
    </>
  )
}

export default About