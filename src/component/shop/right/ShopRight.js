import React from 'react'
import './shopright.css'
import { headerList } from '../../../Atom/Atom';
import { ShopfilterLists } from '../../../Atom/Selector';
import { useRecoilValue, useRecoilState } from 'recoil'
import Fliter from './Fliter'

const ShopRight = () => {
  const [Post_filter_list, setPost_filter_list] = useRecoilState(headerList);
  const filterlist = useRecoilValue(ShopfilterLists);


  const changeProduct = (e) => {
    let a = e.target.value;
    switch (a) {
      case '1':
        if (Post_filter_list.hasOwnProperty('price')) {
          const prop = 'price'
          const newValue = Object.keys(Post_filter_list).reduce((object, key) => {
            if (key !== prop) {
              object[key] = Post_filter_list[key]
            }
            return object
          }, {})
          const d = Object.assign(newValue, { newarrival: a });
          console.log(d);
          setPost_filter_list(d)
        } else {
          setPost_filter_list({ ...Post_filter_list, newarrival: a });
        }
        break;

      case 'sort':
        if (Post_filter_list.hasOwnProperty('price')) {
          const prop = 'price'
          const newValue = Object.keys(Post_filter_list).reduce((object, key) => {
            if (key !== prop) {
              object[key] = Post_filter_list[key]
            }
            return object
          }, {})
          setPost_filter_list(newValue)
        } else {
          const prop = 'newarrival'
          const newValue = Object.keys(Post_filter_list).reduce((object, key) => {
            if (key !== prop) {
              object[key] = Post_filter_list[key]
            }
            return object
          }, {})
          setPost_filter_list(newValue)
        }
        break;

      case 'ASC':
        if (Post_filter_list.hasOwnProperty('newarrival')) {
          console.log('n');
          const prop = 'newarrival'
          const newValue = Object.keys(Post_filter_list).reduce((object, key) => {
            if (key !== prop) {
              object[key] = Post_filter_list[key]
            }
            return object
          }, {})
          const d = Object.assign(newValue, { price: a });
          console.log(d);
          setPost_filter_list(d)
        } else {
          setPost_filter_list({ ...Post_filter_list, price: a });
        }
        break;

      case 'DESC':
        if (Post_filter_list.hasOwnProperty('newarrival')) {
          const prop = 'newarrival'
          const newValue = Object.keys(Post_filter_list).reduce((object, key) => {
            if (key !== prop) {
              object[key] = Post_filter_list[key]
            }
            return object
          }, {})
          const d = Object.assign(newValue, { price: a });
          console.log(d);
          setPost_filter_list(d)
        } else {
          console.log('s');
          setPost_filter_list({ ...Post_filter_list, price: a });
        }
        break;

      default:
        break;
    }
  }

  // console.log(Post_filter_list);

  return (
    <>
      <div className="right_heading ">
        <div className="head_right">
          <span className='ms-2 head_show'>showing 1-20 of products</span>
          <div className="head_select d-inline-block me-2">
            <select className="form-select" onChange={changeProduct} aria-label="Default select example">
              <option value='sort' >sort by</option>
              <option value='1'>new arrivals</option>
              <option value="ASC">price(low to high)</option>
              <option value="DESC">price(high to low)</option>
            </select>
          </div>
        </div>
      </div>
      <Fliter list={filterlist} />
    </>
  )
}

export default ShopRight