import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { headerList } from '../../Atom/Atom';
import { useRecoilState } from 'recoil'

function valuetext(value) {
    return `${value}°C`;
}

export default function SimpleAccordion() {
    const [value, setValue] = React.useState([20, 37]);
    const [price, setPrice] = useRecoilState(headerList)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const priceupdate =()=>{
        setPrice({...price,priceRang1:`${value[0]}`, priceRang2:`${value[1]}`})
    }
    return (
        <>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  
                >
                    <Typography>Price</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        max={5000}
                    />
                    <div className="range justify-content-center">
                        <Typography className=' fs-6 me-3'><span className=' fs-5 text-capitalize'>min-value : </span>{value[0]}</Typography>
                        <Typography className=' fs-6 me-3'><span className='fs-5 text-capitalize'>max-value : </span>{value[1]}</Typography>
                    </div>
                    <div className="submit">
                        <Button variant="outlined" onClick={priceupdate} className='mt-3 back'>Apply</Button>
                    </div>

                </AccordionDetails>
            </Accordion>
        </>
    );
}
