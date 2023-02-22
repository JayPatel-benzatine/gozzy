import React, { Suspense } from 'react'
import './Special.css'
import SpecialCard from './cards/SpecialCard'

const SpecialProducts = () => {
    return (
        <div>
            <div className="special_heading">
                <div className="special_titles d-flex flex-column justify-content-center align-items-center">
                    <h6>Exclusive Products</h6>
                    <h2 className=''>SPECIAL PRODUCTS</h2>
                </div>
                <div className="special_cards mt-3 mb-2">
                    <Suspense fallback={<div>Loading...</div>}>
                        <SpecialCard />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default SpecialProducts