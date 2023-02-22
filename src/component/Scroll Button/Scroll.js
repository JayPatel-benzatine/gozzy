import React, { useState } from 'react'
import './srcoll.css'

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Scroll = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);



  return (
    <div>
      <button onClick={() => window.scroll(0, 0)}
        style={{ display: visible ? 'inline' : 'none' }}
        className="scrollbtn animate__animated animate__fadeInUp">
        <KeyboardDoubleArrowUpIcon />
      </button>
      
    </div>
  )
}

export default Scroll