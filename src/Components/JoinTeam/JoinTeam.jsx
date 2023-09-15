import React from 'react'
import styles from './JoinTeam.module.css'
import ProductLine from '../ProductLine/ProductLine'
import Products from '../Products/Products'
import { Link } from 'react-router-dom'



export default function JoinTeam() {
  return <>    

      <div className="title pb-3 text-center">
            <h2 className='mt-5 fw-bold'>Join Team</h2>
            <p className='fs-5'>Great community </p>
            <div className="line translate-middle"></div>
      </div>

      <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-12'>
            <h3>How to be one of our community in Ecometry team?</h3>
            <p>- Step 1 : Add your own product to help another one to use it </p>
            <p>- Step 2 : Buy materials what you need from all available materials</p>
            <p>- Step 3 : Share your sources with others to be one of our community</p>
        </div>      
        
      </div>      
    </div>      

      <h3 className='text-center fw-bolder'>Step 1 : Adding Materials</h3>
      <div className="line translate-middle"></div>
    <ProductLine/>

    <h3 className='text-center fw-bolder mt-5'>Step 2 : Buying Materials</h3>
    <div className="line translate-middle mb-5"></div>

    <Products />

    <h3 className='text-center fw-bolder mt-5'>Step 3 : Sharing resources</h3>
    <div className="line translate-middle mb-5"></div>

    <div className='container '>
      <div className='row '>
        <div className='col-md-8 m-auto'>
          <label className='mt-5 fw-bolder' htmlFor="resource">Sharing your own resources to help others: </label>
          <input className='form-control my-2'   type="file" name='resource' id='resource' required />
        </div>
      </div>
    </div>

    <div className='container '>
      <div className='row '>
        <div className='col-md-4 m-auto'>
            <button className='btn bg-main text-white w-100 mb-5' type='submit'><Link to='../' className='text-white'> Add</Link></button>
        </div>
      </div>
    </div>

  </>
}
