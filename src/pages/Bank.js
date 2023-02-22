import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron'
import Footer from '../component/footer/Footer'
import Banks from '../component/bank/Banks';
import Scroll from '../component/Scroll Button/Scroll'

const Bank = () => {
    return (
        <div className='bank'>
            <MainNav />
            <Jumbotron name='bank-details' />
            <Banks />
            <Footer />
            <Scroll />
        </div>
    )
}

export default Bank