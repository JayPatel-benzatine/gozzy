import React, { useEffect, useState } from 'react'
import './address.css'
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AddressUserDetails, AddresDetails } from '../../Atom/Atom'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getToken } from '../../utils/Common';

const Formdata = ({ onpenForm }) => {
    const [add,setadd] = useRecoilState(AddressUserDetails)
    const [form_data, setform_data] = useState([add])
    const [load, setload] = useState(false);
    const token = getToken();
    const adds = useSetRecoilState(AddresDetails)

    const f_data = async () => {
        try {
            let res = await axios(
                {
                    method: 'get',
                    url: 'http://ecommerceapi.benzatine.com/public/api/user-address',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                }
            );
            let datas = res.data.data;
            setadd(datas)
            return setform_data(datas);
        } catch (error) {
            return error.response;
        }

    }

    useEffect(() => {
        f_data();
        // eslint-disable-next-line
    }, [load])

    const deleteRequest = async (id) => {

        try {
            let res = await axios(
                {
                    method: 'delete',
                    url: `http://ecommerceapi.benzatine.com/public/api/user-address/${id}`,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                }
            );
            let datas = res.data;
            return console.log(datas);
        } catch (error) {
            return error.response;
        }

    }

    const deleteAddress = (id) => {
        deleteRequest(id);
        setload(!load);
    }
    const fun2 = (elm) => {
        adds(elm)
    }

    return (
        <div className='container fdetais mb-4'>
            {
                (add.length !== 0 ? add : form_data).map((elm, i) => {
                    return (
                        <React.Fragment key={i}>
                            <div className=  " details d-flex flex-column p-2" style={{ backgroundColor: "#f9f9f9" }}>
                                <h4 className='text-capitalize mt-4 ms-3'>{elm.full_name}</h4>
                                <h6 className='ms-3 p-0 mt-1 text-uppercase text-muted fw-light d-flex justify-content-between'>
                                    <span>{elm.type}</span>
                                    <span className={(elm.isdefault === "1") ? 'me-2' : 'd-none'} style={{ color: "#7165E3" }} >default</span>
                                </h6>
                                <h6 className='ms-3 p-0 mt-2'>{elm.phone}</h6>
                                <p className=' text-uppercase text-muted fw-light ms-3'>{elm.house_no}, {elm.street}, {elm.landmark}</p>
                                <p className=' text-uppercase text-muted fw-light ms-3'>{elm.city}, {elm.state}, {elm.pin_code}</p>
                                <div className="option_action d-flex ms-3 mt-2 mb-2">
                                    <EditIcon className='me-2' onClick={() => { onpenForm(); fun2(elm) }} style={{ cursor: "pointer" }} />
                                    <DeleteForeverIcon style={{ cursor: "pointer" }} onClick={() => deleteAddress(elm.id)} />
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default Formdata 