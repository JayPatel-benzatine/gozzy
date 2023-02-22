import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron'
import Footer from '../component/footer/Footer'
import ProductDetails  from '../component/product_Details/ProductDetails'
import Scroll from '../component/Scroll Button/Scroll'

const ProductsDetails = () => {
  return (
    <div>
        <MainNav />
        <Jumbotron name='details'/>
        <ProductDetails />
        <Footer />
        <Scroll />
    </div>
  )
}

export default ProductsDetails