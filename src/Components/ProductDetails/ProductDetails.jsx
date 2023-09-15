import React from 'react'
import styles from './ProductDetails.module.css'
import product1 from '../../assets/images/Products/prod1.jpeg'


export default function ProductDetails() {
  return <>    

    <div className='container-fluid my-5'>
      <div className='row'>
        <div className='col-md-4 text-center'>
          <img src={product1} className='w-50'  alt="" />
        </div>
        <div className='col-md-8'>
        <h6 className='text-main mt-2 font-small fw-bolder'>Formic acid</h6>
          <p className=''>Used in HPLC :If the pH of the mobile phase needs to be reduced to enhance LC separations, in leather tanning, as a decalcifier and cleaning product, as a chemical  reducing agent, O.</p>
          <p className='mt-2'><span className='fw-bolder'>Quantity : </span>400 gm</p>
          <p className='mt-2'><span className='fw-bolder'>Lowest available quantity : </span>100 gm</p>
          <p className='mt-2'><span className='fw-bolder'>Expiry date : </span>7/2025</p>
          <p className='mt-2'><span className='fw-bolder'>Location : </span>Cairo</p>
          <p className='mt-2'><span className='fw-bolder'>Usage : </span> - Used in HPLC :If the pH of the mobile phase needs to be reduced to enhance LC separations,</p>
          <p >- in leather tanning, as a decalcifier and cleaning product, as a chemical  reducing agent, O.</p>
          <p className='mt-2'><span className='fw-bolder'>Price : </span>125 EGP</p>
          <p className='mt-2'><span className='fw-bolder'>More information : </span>Formic acid is the root cause of methanol toxicity as the build up of partially oxidized methanol (i.e., formic acid) in the body results in acidosis. Both methanol and formic acid are toxic through oral and dermal exposure. </p>
          
          <button className='btn bg-main text-white w-100 my-3'>Add to cart</button>

        </div>
      </div>
    </div>

  </>
}
