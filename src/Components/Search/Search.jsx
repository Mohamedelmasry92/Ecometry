import React from 'react'
import styles from './Search.module.css'
import Products from '../Products/Products'


export default function Search() {
  return <>    
    
    <div className="title pb-3 text-center">
                <h2 className='mt-5 fw-bold'>Search</h2>
                <p className='fs-5'>Search to find product that you need</p>
                <div className="line translate-middle"></div>
            </div>

  <div className="container my-4 ">
    <div className="row ">
      <div className="col-md-2 m-auto mt-2">
        </div>
      <div className=" col-md-8 m-auto mt-2">
          <input className='form-control my-2 d-inline ' placeholder='Search' type="text" name='search' id='search' />
      </div>
    <div className="col-md-2 m-auto mt-2">
        <button className='btn bg-main text-white w-100 mt-2' type='submit'>Search</button>
     </div>
  </div>
  </div>
                 



  <div className="container-fluid ">
    <div className="row ">
        <div className="col-md-2 mt-5 bag-gradient py-3">
            <h5 className='fw-bolder fs-4 text-white'>Choose filters</h5>

            <div className='bg-main-light w-100 fs-5 cursor-pointer nav-hover mt-4'>
              <input className='ms-2' type="checkbox" id="all" name="all" />
              <label className='cursor-pointer' htmlFor="all">&nbsp;All Result</label>
            </div>
            <div className='bg-main-light w-100 fs-5 cursor-pointer nav-hover mt-4'>
              <input className='ms-2' type="checkbox" id="material" name="material" />
              <label className='cursor-pointer' htmlFor="material">&nbsp;By Material Name</label>
            </div>
            <div className='bg-main-light w-100 fs-5 cursor-pointer nav-hover my-4'>
              <input className='ms-2' type="checkbox" id="location" name="location" />
              <label className='cursor-pointer' htmlFor="location">&nbsp;By Location</label>
            </div>
            <div className='bg-main-light w-100 fs-5 cursor-pointer nav-hover'>
              <input className='ms-2' type="checkbox" id="institution" name="institution"/>
              <label className='cursor-pointer' htmlFor="institution">&nbsp;By Institution</label>
            </div>
            <div className='bg-main-light w-100 fs-5 cursor-pointer nav-hover my-4'>
              <input className='ms-2' type="checkbox" id="price" name="price"/>
              <label className='cursor-pointer' htmlFor="price">&nbsp;By Price</label>
            </div>
            <div className='bg-main-light w-100 fs-5 cursor-pointer nav-hover'>
              <input className='ms-2' type="checkbox" id="rate" name="rate"/>
              <label className='cursor-pointer' htmlFor="rate">&nbsp;By Rating</label>
            </div>
            <div className='bg-main-light w-100 fs-5 cursor-pointer nav-hover my-4'>
              <input className='ms-2' type="checkbox" id="rate" name="rate"/>
              <label className='cursor-pointer' htmlFor="rate">&nbsp;By Quantity</label>
            </div>
            <div className='bg-main-light w-100 fs-5 cursor-pointer nav-hover'>
              <input className='ms-2' type="checkbox" id="rate" name="rate"/>
              <label className='cursor-pointer' htmlFor="rate">&nbsp;By Expiration</label>
            </div>
            <div className='bg-main-light w-100 fs-5 cursor-pointer nav-hover my-4'>
              <input className='ms-2' type="checkbox" id="rate" name="rate"/>
              <label className='cursor-pointer' htmlFor="rate">&nbsp;By Research field</label>
            </div>
        </div>


        <div className="col-md-10 ">
            <Products/>
        </div>
    </div>
  </div>









  </>
}
