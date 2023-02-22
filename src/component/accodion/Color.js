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
import CircleIcon from '@mui/icons-material/Circle';
import './acco.css';


export default function Color() {
    const [atomHandle, setAtomHandle] = useRecoilState(headerList);
    const ShopsColorLists = useRecoilValue(ShopColorLists);
    const [colorData, setcolorData] = useState(null);
    const [cData, setCData] = useState([]);

    const c_data = () => {
        if (ShopsColorLists.length >= 0) {
            const Color = ShopsColorLists.filter((el) => el.type === 'COLOR')
            setcolorData(Color);
        }
    }
    useEffect(() => {
        c_data();
        // eslint-disable-next-line
    }, [ShopsColorLists])

    useEffect(() => {
        if (cData.length > 0) {
            unchecked();
        } else {
            const prop = 'color'
            const newAtom = Object.keys(atomHandle).reduce((object, key) => {
                if (key !== prop) {
                    object[key] = atomHandle[key]
                }
                return object
            }, {})
            setAtomHandle(newAtom)
        }
        // eslint-disable-next-line
    }, [cData])

    const unchecked = () => {
        // eslint-disable-next-line 
        {
            var RS_data = cData.map((elm) => elm)
        }
        var texts = RS_data.join(",");
        setAtomHandle({ ...atomHandle, color: texts })
    }

    const checkhandle = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            cData.push(value)
            // eslint-disable-next-line 
            {
                var S_data = cData.map((elm) => elm)
            }
            var text = S_data.join(",");
            setAtomHandle({ ...atomHandle, color: text })
        } else {
            const result_data = cData.filter(elm => elm !== value)
            setCData(result_data);
            console.log(result_data);
            unchecked();
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
                    <Typography className=' text-capitalize'>color</Typography>
                </AccordionSummary>
                <AccordionDetails className='a_body'>
                    {
                        (colorData !== null) ?
                            (colorData.map((elm, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <div className="form-check" >
                                            <input className="form-check-input" multiple value={elm.name} onChange={checkhandle} type="checkbox" />
                                            <label className="form-check-label ms-1 ">
                                                <CircleIcon style={{ color: `${elm.color_code}`, border: '1px solid grey', borderRadius: '100%' }} />
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
