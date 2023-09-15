import React from 'react'
import styles from './ProductLine.module.css'
import { Link } from 'react-router-dom'


export default function ProductLine() {
  return <>    


                <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-12'>
            <h3>How to add your own chemical material in Ecometry ?</h3>
            <p>- Fill this form with all required data and click on add product button, so you have added your product easily</p>
            <p>- Write product name and product title & product describtion and must detect it's price</p>
            <p>- You must write the usage of each product that you will added </p>
        </div>      
        
      </div>      
    </div>      


    <div class="container w-50  px-5 py-4 mt-2 shadow-lg">
            <div class="row">
                <div class="col-md-12 bg-white ms-auto">
                <h2 className='mb-2'>Add Your Own Product : </h2>   
                          <form>
                             <label htmlFor="pName" className='mt-3 fw-bolder'>Material Name :</label>
                             <input className='form-control my-2'  type="text" name='pName' id='pName' required />
                 
                             <label className='mt-3 fw-bolder' htmlFor="quantity">Quantity :</label>
                             <input className='form-control my-2'   type="text" name='quantity' id='quantity' required />
                 
                             <label className='mt-3 fw-bolder' htmlFor="price">Price : </label>
                             <input className='form-control my-2'   type="Number" name='price' id='price' required />
                             
                             <label className='mt-3 fw-bolder' htmlFor="expire">Expiry : </label>
                             <input className='form-control my-2'   type="Number" name='expire' id='expire' required />
                             
                             <label className='mt-3 fw-bolder' htmlFor="location">Location : </label>
                             <input className='form-control my-2'   type="Number" name='location' id='location' required />
                             
                             <label className='mt-3 fw-bolder' htmlFor="usage">Usage : </label>
                             <input className='form-control my-2'   type="Number" name='usage' id='usage' required />
                             
                             <label className='mt-3 fw-bolder' htmlFor="minimum">Minimum quantity offered : </label>
                             <input className='form-control my-2'   type="Number" name='minimum' id='minimum' required />
                             
                             <label className='mt-3 fw-bolder' htmlFor="interests">Research interests which the material belongs : </label>
                             <input className='form-control my-2'   type="Number" name='interests' id='interests' required />
                             
                             <label className='mt-3 fw-bolder' htmlFor="image">Material image : </label>
                             <input className='form-control my-2'   type="file" name='image' id='image' required />
                 
                             <label className='mt-3 fw-bolder' htmlFor="pDesc">More information :</label>
                             <textarea className='form-control my-2'   type="text" name='pDesc' id='pDesc' required />

                             
                             <button className='btn bg-main text-white w-100 mt-3' type='submit'><Link to='../products' className='text-white'>Add Product</Link></button>
                            </form>
                </div>
            </div>
        </div>


  </>
}
