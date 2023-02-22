import React from 'react'
import './Contact.css'
import Form from './Form'
import Address from './Address'

const Contact = () => {
    return (
        <>
            <div className="container form_main">
                <Form />
            </div>
            <Address />
        </>
    )
}

export default Contact