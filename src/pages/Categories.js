import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron';
import Footer from '../component/footer/Footer';
import Category from '../component/Categoery/Category'

import Scroll from '../component/Scroll Button/Scroll'

const Categories = () => {
    return (
        <div className='CateGory'>
            <MainNav />
            <Jumbotron name='category' />
            <Category />
            <Footer />
            <Scroll />
        </div>
    )
}

export default Categories
