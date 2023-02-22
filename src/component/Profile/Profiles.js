import React from 'react'
import './profile.css'
import Forms from './Forms'

const Profiles = () => {

    return (
        <div className='profile_main'>
            <div className="profile_heading mt-5 text-center">
                <h1 className='text-uppercase'>profile</h1>
            </div>
            <section className='profile_form'>
                <Forms />
            </section>
        </div>
    )
}

export default Profiles