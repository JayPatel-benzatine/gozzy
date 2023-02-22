import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ShopColorLists } from '../../Atom/Selector'
import { headerList } from '../../Atom/Atom'
import { useRecoilValue, useRecoilState } from 'recoil';
import CircularIndeterminate from '../Skelecton'
import './acco.css';

export default function Size() {
    const [atomHandle, setAtomHandle] = useRecoilState(headerList);
    const ShopsColorLists = useRecoilValue(ShopColorLists);
    const [sizeData, setSizeData] = useState(null);
    const [sData, setSData] = useState([]);

    const c_data = () => {
        if (ShopsColorLists.length >= 0) {
            const size = ShopsColorLists.filter((el) => el.type === 'SIZE')
            setSizeData(size);
        }
    }
    useEffect(() => {
        c_data();
        // eslint-disable-next-line
    }, [ShopsColorLists])

    useEffect(() => {
        if (sData.length > 0) {
            uncheckedSize();
        } else {
            const prop = 'size'
            const newAtoms = Object.keys(atomHandle).reduce((object, key) => {
                if (key !== prop) {
                    object[key] = atomHandle[key]
                }
                return object
            }, {})
            setAtomHandle(newAtoms)
        }
        // eslint-disable-next-line
    }, [sData])

    const uncheckedSize = () => {
        // eslint-disable-next-line 
        {
            var RS_datas = sData.map((elm) => elm)
        }
        var textsize = RS_datas.join(",");
        setAtomHandle({ ...atomHandle, size: textsize })
    }

    const sizeClickedHandle = (e) => {
        const { value, checked } = e.target;
        console.log(value);
        if (checked) {
            sData.push(value)
            // eslint-disable-next-line 
            {
                var cS_data = sData.map((elm) => elm)
            }
            var size_data = cS_data.join(",");
            setAtomHandle({ ...atomHandle, size: size_data })
        } else {
            const result_Sdata = sData.filter(elm => elm !== value)
            setSData(result_Sdata);
            console.log(result_Sdata);
            uncheckedSize();
        }
    }

    return (
        <>
            <Accordion className='mt-3'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className=' text-capitalize'>size</Typography>
                </AccordionSummary>
                <AccordionDetails className='a_body'>
                    {
                        (sizeData !== null) ?
                            (sizeData.map((elm, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <div className="form-check">
                                            <input className="form-check-input" multiple value={elm.name} onChange={sizeClickedHandle} type="checkbox" id="flexCheckIndeterminate" />
                                            <label className="form-check-label ms-1 " htmlFor="flexCheckIndeterminate">
                                                <span className='ms-2'>{elm.name}</span>
                                            </label>
                                        </div>
                                    </React.Fragment>
                                )
                            })) : (
                                <div className='s_class'><span><CircularIndeterminate /></span><span>Loading</span></div>
                            )
                    }
                </AccordionDetails>
            </Accordion>
        </>
    );
}
