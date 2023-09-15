import React from 'react'
import styles from './Cart.module.css'
import product9 from '../../assets/images/Products/prod9.jpeg'
import product10 from '../../assets/images/Products/prod10.jpeg'
import product12 from '../../assets/images/Products/prod12.jpeg'
import product14 from '../../assets/images/Products/prod14.jpeg'

export default function Cart() {
  return <>    
     <div className='container my-5'>
            <div className='row text-center'>

            <div className="title pb-3 text-center">
                <h6 className='fs-4 fw-bold '>Selected Products</h6>
                <div className="line translate-middle"></div>
            </div>
  
          <div className='container mt-3'>
            <div className='row text-center'>
            <div className='col-md-2'>
            <div className="product">
                <img src={product9} className='w-100'  alt="" />
                <h6 className='text-main mt-2 font-small fw-bolder'>PLATE COUNT AGAR</h6>
                <p className='mt-2'>Selected quantity : 100 gm</p>
                <span>Price: 900 EGP</span>
                <button className='btn bg-main text-white w-100 '>Complete purchase</button>
                <button className='btn bg-main text-white w-100 mt-1'>Remove from list</button>
            </div>
            </div>

            <div className='col-md-2'>
            <div className="product">
                <img src={product10} className='w-100'  alt="" />
                <h6 className='text-main mt-2 font-small fw-bolder'>Ethanol</h6>
                <p className='mt-2'>Selected quantity : 200 gm</p>
                <span>Price: 650 EGP</span>

                <button className='btn bg-main text-white w-100 '>Complete purchase</button>
                <button className='btn bg-main text-white w-100 mt-1'>Remove from list</button>
            </div>
            </div>

            <div className='col-md-2'>
            <div className="product">
                <img src={product14} className='w-100'  alt="" />
                <h6 className='text-main mt-2 font-small fw-bolder'>Urea pellets</h6>
                <p className='mt-2'>Selected quantity : 150 gm</p>
                <span>Price: 300 EGP</span>

                <button className='btn bg-main text-white w-100 '>Complete purchase</button>
                <button className='btn bg-main text-white w-100 mt-1'>Remove from list</button>
            </div>
            </div>
            
            <div className='col-md-2'>
              <div className="product">
                <img src={product12} className='w-100'  alt="" />
                <h6 className='text-main mt-2 font-small fw-bolder'>Chromium standard solution</h6>
                <p className='mt-2'>Selected quantity : 250 gm</p>
                <span>Price: 420 EGP</span>
                <button className='btn bg-main text-white w-100 '>Complete purchase</button>
                <button className='btn bg-main text-white w-100 mt-1'>Remove from list</button>
            </div>
            
              </div>
              </div>
              </div>

            <div className="container">
              <div className="row">
                <div className="col-md-3 ms-auto">
                  <p className='fw-bolder lead'>Total Cost : <span className='btn btn-info'>2270 EGP</span></p>
                  <button className='btn bg-main text-white'>Checkout</button>

                </div>
              </div>
            </div>

          
              </div>
              </div>
  </>
}
