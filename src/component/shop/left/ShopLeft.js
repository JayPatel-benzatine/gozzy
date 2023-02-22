import React from 'react'
import './shopleft.css'
import { useRecoilState } from 'recoil';
import { headerList } from '../../../Atom/Atom'
import SimpleAccordion from '../../accodion/Accodion'
import Category from '../../accodion/CategoryAcc'
import Size from '../../accodion/Size'
import Color from '../../accodion/Color'

const ShopLeft = () => {
    // eslint-disable-next-line
    const [atomHandle, setAtomHandle] = useRecoilState(headerList);
    return (
        <>
            <div className="rest_filter ">
                <button className='f_btn p-2 fs-6' onClick={() => setAtomHandle({ priceRang1: '0', priceRang2: '5000' })}>reset filter</button>
            </div>
            <div className="Price mt-4">
                <SimpleAccordion />
            </div>
            <Category />
            <Size />
            <Color />
        </>
    )
}

export default ShopLeft