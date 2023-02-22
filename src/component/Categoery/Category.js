import React, { useEffect, useState } from 'react'
import './CategoeryPage.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { headerList } from '../../Atom/Atom'
import { useRecoilState } from 'recoil';
const Category = () => {
  const { id } = useParams();
  const [fe_data, setFe_data] = useState([])
  const [upAtom, setUpAtom] = useRecoilState(headerList)
  const f_data = async () => {
    try {
      const response = await axios.get(`http://ecommerceapi.benzatine.com/public/api/category_list/${id}`);
      return setFe_data(response.data.data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    f_data();
    // eslint-disable-next-line
  }, [id])

  // console.log(fe_data);

  return (
    <div>

      {
        fe_data.map((elm, i) => {
          return (
            <React.Fragment key={i}>
              <div className='container cat_main' >
                <div className="cat_heading mt-5 text-center">
                  <h1 className='text-uppercase'>{elm.name}</h1>
                </div>
                <div className="C_cards mt-5 mb-5">
                  {
                    elm.subcates.map((ele,i) => {
                      return (
                        <React.Fragment key={i}>
                          <div className="Categories_banner">
                            <div>
                              <img alt="" className="imgs_fluid" src={ele.image} />
                            </div>
                            <div className="categories_box text-capitalize">
                              <Link to="/shop" onClick={() => setUpAtom({ ...upAtom, category_id: ele.id })}> <h2>{ele.name}</h2>  </Link>
                            </div>
                          </div>
                        </React.Fragment>)
                    })
                  }

                </div>
              </div>
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default Category