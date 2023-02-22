import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './t.css';
import { order_data_get } from '../../utils/Common'

const TrackOrders = () => {
    const [trackItem, settrackItem] = useState([])
    const [val, setval] = useState('0')
    const [date, setdate] = useState('0')
    const [order_codes, setorder_codes] = useState('')



    useEffect(() => {
        order_data_get(settrackItem)
    }, [])

    useEffect(() => {
        trackItem.map((elm) => {
            if (elm.product_status === 'Shipped') {
                setval(3)
            } else if (elm.product_status === 'Pending') {
                setval(1)
            } else if (elm.order_status === 'Pending') {
                setval(1)
            } else if (elm.product_status === 'Confirmed') {
                setval(2)
            }
            else if (elm.product_status === 'Processing') {
                setval(3)
            }
            else if (elm.product_status === "Delivered") {
                setval(5)
            }
            const d = elm.order_date.slice(0, 10)
            var date = new Date(d);;
            date.setDate(date.getDate() + 7);
            const s = date.toString()
            const news = s.slice(0, 15)
            setdate(news)
            setorder_codes(elm.order_code)
        })
    },[trackItem])
    const steps = [
        'Order Placed',
        'Pending',
        'Confirmed',
        'Processing',
        'Delivered',
    ];

 
    return (
        <div className='container cat_main'>
            <div className="cat_heading mt-5 mb-5 text-center">
                <h1 className='text-uppercase'>your orders</h1>
            </div>
            <div className="stteper mb-5">
                <div className="typesss d-flex justify-content-between">
                    <ul className=' d-flex list-unstyled'>
                        <li className=' text-uppercase' >oreder : </li>
                        <li className=' text-uppercase ms-1' style={{ color: "#007bff" }}>{order_codes} </li>
                    </ul>
                    <ul className=' d-flex list-unstyled'>
                        <li className=' text-uppercase'>Delivery Date : </li>
                        <li className=' text-uppercase ms-1' style={{ color: "#007bff" }}>{date} </li>
                    </ul>
                </div>
                <div className="mt-5 ">
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={val} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default TrackOrders