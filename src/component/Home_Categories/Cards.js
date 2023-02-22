import React from 'react'
import './Cards.css'
import { categoreyList,headerList } from '../../Atom/Atom'
import { useRecoilValue,useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
const Cards = () => {
    const Category_data = useRecoilValue(categoreyList)
    const [upAtom,setUpAtom] = useRecoilState(headerList)
    return (
        <>
            <div className="h_cards">
                {
                    Category_data.map((elm) => {
                        return (
                            <React.Fragment key={elm.id}>
                                <div className="category-banner">
                                    <div>
                                        <img alt="" className="img-fluid" src={elm.image} />
                                    </div>
                                    <div className="category-box">
                                        <Link to="/shop" onClick={()=>setUpAtom({...upAtom,category_id:elm.id})}> <h2>{elm.name}</h2></Link>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
         

            <div className="h_card">
                <div className="category-ban">
                    <div>
                        <Link to="/shop" onClick={()=>setUpAtom({...upAtom,category_id:'fashion'})}><img alt="" className="img-fluids" src={require('../../assets/card4.jpeg')} /> </Link>
                    </div>
                    <div className="category-boxs">
                        <h6>SAVE 30%</h6>
                        <Link to="/shop" onClick={()=>setUpAtom({...upAtom,category_id:'fashion'})}><h3>FOOTWEAR</h3></Link>
                    </div>
                </div>

                <div className="category-ban">
                    <div>
                        <Link to="/shop" onClick={()=>setUpAtom({...upAtom,category_id:'fashion'})}><img alt="" className="img-fluids" src={require('../../assets/card5.jpeg')} />  </Link>
                    </div>
                    <div className="category-boxs">
                        <h6>SAVE 50%</h6>
                        <Link to="/shop" onClick={()=>setUpAtom({...upAtom,category_id:'fashion'})}><h3>WATCHES</h3></Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards