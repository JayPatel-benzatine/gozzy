import React, { Suspense } from 'react'
import './TrendsCards.css'
import Card from './Card'
const TrendCards = () => {
    return (
        <div className='h_mains'>
            <div className="titles d-flex flex-column justify-content-center align-items-center">
                <h6>Special Offer</h6>
                <h2 className=''>TRENDING DEALS</h2>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Card />
            </Suspense>
        </div>
    )
}

export default TrendCards