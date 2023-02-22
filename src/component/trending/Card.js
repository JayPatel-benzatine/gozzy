import React, { useEffect } from 'react'
import './Card.css'
import { TrendOfferList, headerList } from '../../Atom/Atom'
import { TrendOfferLists } from '../../Atom/Selector'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'

const Card = () => {
    const tend_list = useRecoilValue(TrendOfferLists)
    const [trendData, setTrendData] = useRecoilState(TrendOfferList)
    const [upAtom, setUpAtom] = useRecoilState(headerList)

    useEffect(() => {
        setTrendData(tend_list)
        // eslint-disable-next-line
    }, [])
    //    console.log(trendData);
    return (
        <>
            <div className="h_cardss">
                {
                    trendData.map((elm, i) => {
                        return (
                            <React.Fragment key={i}>
                                <div  className="category-bannerss">
                                    <div>
                                        <Link to="/shop" onClick={() => setUpAtom({ ...upAtom, category_id: elm.category_id })}>
                                            <img alt="" className="img-fluidss" src={elm.offer_image} />
                                        </Link>
                                    </div>
                                    <div className="category-boxss">
                                        <Link to="/shop" onClick={() => setUpAtom({ ...upAtom, category_id: elm.category_id })}> <h2 className=' d-flex flex-column align-items-center text-capitalize'>{elm.category_name}<span className='h_span'>{elm.offer_amount}% off</span></h2></Link>
                                    </div>
                                </div>
                            </React.Fragment>)
                    })
                }
            </div>
        </>
    )
}

export default Card