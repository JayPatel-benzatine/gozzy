import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron';
import Footer from '../component/footer/Footer'
import Favroite from '../component/wishlist/Favroite'
import Scroll from '../component/Scroll Button/Scroll'

const Wishlist = () => {
  return (
    <div className='profile'>
    <MainNav />
    <Jumbotron name='wishlist'/>
    <Favroite />
    <Footer />
    <Scroll />
</div>
  )
}

export default Wishlist