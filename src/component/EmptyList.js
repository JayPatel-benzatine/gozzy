import React from 'react'
import { Link } from 'react-router-dom'

const EmptyList = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <img src={require('../assets/empty-search.jpeg')} alt='' className="mb-4" />
                <h3 >Sorry! Couldn't find the product you were looking For!!! </h3>
                <p >Please check if you have misspelt something or try searching with other words.</p>
                <Link className="btn btn-solid" to="#">continue shopping</Link>
            </div>
        </div>
    )
}

export default EmptyList