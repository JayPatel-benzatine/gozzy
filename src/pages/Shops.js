import React, { Suspense } from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron';
import Footer from '../component/footer/Footer'
import Scroll from '../component/Scroll Button/Scroll'
import Shop from '../component/shop/Shop';
import CircularIndeterminate from '../component/Skelecton'

const Shops = () => {
  return (
    <div className='profile'>
      <MainNav />
      <Jumbotron name='collection' />
      <Suspense fallback={<div className='mt-5 mb-5 d-flex flex-column align-items-center'><span><CircularIndeterminate  /></span><span>Loading</span></div>}>
        <Shop />
      </Suspense>
      <Footer />
      <Scroll />
    </div>
  )
}

export default Shops