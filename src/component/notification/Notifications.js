import React from 'react'
import './notifications.css'


const Notifications = () => {
  return (
    <div>
      <div className='container notification_main '>
        <div className="notification_head text-center text-uppercase mt-5 mb-5 ">
          <h1>NOTIFICATION SETTINGS</h1>
        </div>
        <div className="notification_heading ms-3 me-3">
          <h3 className='ms-3'>ENABLE NOTIFICATIONS FOR</h3>
        </div>
        <div className="n_form ms-3 me-3">
          <form className="ms-1 me-1 g-3 mb-5">
            <div className="row mb-3">
              <div className="form-check mt-4">
                <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                <label className="form-check-label ms-2" htmlFor="flexCheckn">
                  For You
                </label>
              </div>
            </div>
            <div className="mb-3 d-flex f_heading">
              <div class="col-sm-8">
                <h4 className='ms-2' >
                  <b >All Collections</b>
                </h4>
              </div>
              <div className="form-check">
                <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                <label className="form-check-label ms-2" htmlFor="flexCheckn">
                  Select All
                </label>
              </div>
            </div>
            <hr />
            <div className="row mb-3 mt-4">
              <div className="col-sm-6 ps-0">
                <div className="form-check">
                  <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                  <label className="form-check-label ms-2 notify_label" htmlFor="flexCheckn">
                  Anklets & Top Rings
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                  <label className="form-check-label ms-2 notify_label" htmlFor="flexCheckn">
                  Application Covers & Fridge Mats
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                  <label className="form-check-label ms-2 notify_label" htmlFor="flexCheckn">
                  Awesome April
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                  <label className="form-check-label ms-2 notify_label" htmlFor="flexCheckn">
                  Bags & Backpacks
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                  <label className="form-check-label ms-2 notify_label" htmlFor="flexCheckn">
                  Bangles & Bracelets
                  </label>
                </div>

              </div>
              <div className="col-sm-6 ps-0">
                <div className="form-check">
                  <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                  <label className="form-check-label ms-2 notify_label" htmlFor="flexCheckn">
                  Bedsheets
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                  <label className="form-check-label ms-2 notify_label" htmlFor="flexCheckn">
                  Capes, Shrugs & Ponchos
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                  <label className="form-check-label ms-2 notify_label" htmlFor="flexCheckn">
                  Casual Shoes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                  <label className="form-check-label ms-2 notify_label" htmlFor="flexCheckn">
                  Classic Kurtis
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckn" />
                  <label className="form-check-label ms-2 notify_label" htmlFor="flexCheckn">
                  Decorative Stickers
                  </label>
                </div>

              </div>
            
            </div>


            <div className="col-3 ps-2">
              <button type="submit" className="btn f_btn notify" style={{padding:'10px'}}>save changes</button>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Notifications