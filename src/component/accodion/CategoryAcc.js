import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ShopCategoryLists } from '../../Atom/Selector'
import { headerList } from '../../Atom/Atom'
import { useRecoilValue, useRecoilState } from 'recoil';

export default function Category() {
    const ShopsCategoryLists = useRecoilValue(ShopCategoryLists);
    const [atomHandle, setAtomHandle] = useRecoilState(headerList);

    return (
        <>
            <Accordion className='mt-3 '>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography  className='text-capitalize'>category</Typography>
                </AccordionSummary>
                <AccordionDetails className=' h-50 a_body' >
                    <ul className='list-unstyled text-capitalize fs-4'>
                        {
                            ShopsCategoryLists.map((elm, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <li >
                                            <span onClick={() => setAtomHandle({ ...atomHandle, category_id: elm.id })} className='list_head'>{elm.name}</span>
                                            <ul className=' list-unstyled ps-3 mt-1 fs-5'>
                                                <li className='ps-1'>
                                                    {
                                                        elm.subcat.map((elem, j) => {
                                                            return (
                                                                <React.Fragment key={j}>
                                                                    <span  onClick={() => setAtomHandle({ ...atomHandle, category_id: elem.id })} className='sublist_head text-muted fw-bolder'> {elem.name}</span>
                                                                    <ul className=' list-unstyled ps-2 pt-1  fs-6'>
                                                                        {
                                                                            elem.subcat.map((elsd, k) => {
                                                                                return (
                                                                                    <React.Fragment key={k}>
                                                                                        <li  className='p-1 text-muted'><span className='subSubHead' onClick={() => setAtomHandle({ ...atomHandle, category_id: elsd.id })}>{elsd.name}</span></li>
                                                                                    </React.Fragment>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </React.Fragment>
                                                            )
                                                        })
                                                    }
                                                </li>
                                            </ul>
                                        </li>
                                    </React.Fragment>
                                )
                            })
                        }

                    </ul>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
