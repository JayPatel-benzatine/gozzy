import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import SimpleAccordion from '../accodion/Accodion'
import Category from '../accodion/CategoryAcc'
import Size from '../accodion/Size'
import Color from '../accodion/Color'
import './slider.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {headerList} from '../../Atom/Atom'
import {useSetRecoilState} from 'recoil';
export default function TemporaryDrawer() {
    const [state, setState] = React.useState({ left: false });
    const upatom = useSetRecoilState(headerList)

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
        >
            <div className="text_btn text-end  mt-3 mb-3 me-4">
                <Button className='back' onClick={toggleDrawer(anchor, false)}>back</Button>
            </div>
            <Divider />
            <div className="container">
                <List className='list_acc'>
                    <SimpleAccordion />
                    <Category />
                    <Size />
                    <Color />
                </List>
            </div>

        </Box>
    );

    return (
        <>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className='f_btns ' onClick={toggleDrawer(anchor, true)}><FilterAltIcon />Filter</Button>
                    <Button className='f_btns ms-3 ' onClick={()=>upatom({priceRang1: '0', priceRang2: '5000'})}>Reset</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </>
    );
}
