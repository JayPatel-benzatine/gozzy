import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Footer from '../component/footer/Footer'
import Scroll from '../component/Scroll Button/Scroll'

const Error = () => {
    return (
        <div className='profile'>
            <MainNav />
            <img src={require('../assets/404e.webp')} style={{ width: '100vw', height: "500px" }} alt="" />
            <Footer />
            <Scroll />
        </div>

    )
}

export default Error