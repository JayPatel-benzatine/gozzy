import React, { Suspense } from 'react'
import './shop.css'
import ShopLeft from './left/ShopLeft';
import ShopRight from './right/ShopRight';
import CircularIndeterminate from '../Skelecton'
import Sidebar from '../drawer/Sidebar'
const Shop = () => {
  
  return (
    <div className='container'>
      <div className="row">
        <div className="col-3 d-none left_shop p-4">
          <ShopLeft />
        </div>
        <div className="sidebar text-center mt-3">
          <Sidebar />
        </div>
        <Suspense fallback={<div className='s_class'><span><CircularIndeterminate /></span><span>Loading</span></div>}>
          <div className="col-md-9  right_shop pt-4">
            <ShopRight />
          </div>
        </Suspense>
      </div>
    </div>
  )
}

export default Shop