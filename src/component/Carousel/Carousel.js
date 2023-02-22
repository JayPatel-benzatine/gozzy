import React, { useEffect, useState } from 'react'
import './Carousel.css'
import { SliderList, headerList } from '../../Atom/Atom'
import { SliderLists } from '../../Atom/Selector'
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
const Carousel = () => {
    const Slider_List = useRecoilValue(SliderLists)
    const [slideData, setSlideData] = useRecoilState(SliderList)
    const [isHovering, setIsHovering] = useState(false);
    const [upAtom, setUpAtom] = useRecoilState(headerList);
    useEffect(() => {
        setSlideData([Slider_List])
        // eslint-disable-next-line 
    }, [])

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <div onMouseLeave={handleMouseOut}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{display:"inline"}}>
                <div className="carousel-inner" onMouseOver={handleMouseOver}  >
                    {
                        slideData.map((elm, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="2000">
                                            <img src={elm[0].image} className="d-block w-100" alt="..." />
                                            <div className="carousel-caption ">
                                                <h4>Welcome To Fashion</h4>
                                                <h1>{elm[0].name}</h1>
                                                <Link to='/shop'><button type="button" onClick={() => setUpAtom({ ...upAtom, category_id: "5" })} className="btn btn-primary btn_shop">Shop Now </button></Link>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={elm[1].image} className="d-block w-100" alt="..." />
                                            <div className="carousel-caption ">
                                                <h4>Welcome To Fashion</h4>
                                                <h1>{elm[1].name}</h1>
                                                <Link to='/shop'><button type="button" onClick={() => setUpAtom({ ...upAtom, category_id: "6" })} className="btn btn-primary btn_shop">Shop Now </button></Link>
                                            </div>                                    </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={elm[2].image} className="d-block w-100" alt="..." />
                                            <div className="carousel-caption ">
                                                <h4>Welcome To Fashion</h4>
                                                <h1>{elm[2].name}</h1>
                                                <Link to='/shop'><button type="button" onClick={() => setUpAtom({ ...upAtom, category_id: "8" })} className="btn btn-primary btn_shop">Shop Now </button></Link>
                                            </div>                                    </div>
                                    </div>
                                </React.Fragment>)
                        })
                    }
                </div>
                <button className={isHovering ? "carousel-control-prev animate__animated animate__fadeInLeft animate__faster" : 'd-none'} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className={isHovering ? "carousel-control-next animate__animated animate__fadeInRight animate__faster" : 'd-none'} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    
    )
}

export default Carousel