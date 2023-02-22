import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron'
import Footer from '../component/footer/Footer'
import Carts from '../component/Cart/Carts'
import Scroll from '../component/Scroll Button/Scroll'

const Cart = () => {
    return (
        <div>
            <MainNav />
            <Jumbotron name='cart' />
            <Carts />
            <Footer />
            <Scroll />
        </div>
    )
}

export default Cart