import React, { useState } from 'react'
import './address.css'
import AddressForm from './AddressForm'
import Formdata from './Formdata';
import { AddresDetails } from '../../Atom/Atom'
import { useSetRecoilState } from 'recoil';

const Addres = () => {
    const [loading, setLoading] = useState(true)
    const reset = useSetRecoilState(AddresDetails)
    const openForm = () => {
        setLoading(false);
    }
    const closeForm = () => {
        setLoading(true);
        
    }

    return (
        <div className='container address_main'>
            <div className="address_head text-center text-uppercase mt-5 mb-4 ">
                <h1>my address</h1>
            </div>
            <div className="form_datas">
                <Formdata onpenForm={openForm} />
            </div>
            <div className=" mb-5">
                <button type="submit" className="btn f_btn" onClick={openForm}>add new address</button>
            </div>
            <div className={loading ? ('add_form ms-2 me-2 mb-5 d-none') : ("add_form ms-2 me-2 mb-5")} >
                <AddressForm statesClose={closeForm} />
            </div>
        </div>
    )
}

export default Addres