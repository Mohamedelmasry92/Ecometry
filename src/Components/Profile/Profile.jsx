import React from 'react'
import styles from './Profile.module.css'
import profile from '../../assets/images/profile.jpg'
import Products from '../Products/Products'


import { Link } from 'react-router-dom'
import product1 from '../../assets/images/Products/prod1.jpeg'
import product2 from '../../assets/images/Products/prod2.jpeg'
import product3 from '../../assets/images/Products/prod3.jpeg'
import product4 from '../../assets/images/Products/prod4.jpeg'
import product5 from '../../assets/images/Products/prod5.jpeg'
import product6 from '../../assets/images/Products/prod6.jpeg'
import product9 from '../../assets/images/Products/prod9.jpeg'
import product10 from '../../assets/images/Products/prod10.jpeg'
import product11 from '../../assets/images/Products/prod11.jpeg'
import product12 from '../../assets/images/Products/prod12.jpeg'



export default function Profile() {
  return <>    

      <div className='container-fluid my-5'>
        <div className='row text-center'>
          <div className='col-md-2'>

            <img src={profile} className='w-100' alt=''/>
            <h5>Ahmed Tahoun</h5>
            <h6>atahoun10@gmail.com</h6>
            <h6>01287460296</h6>
            <button className='btn bg-main text-white w-100 mt-3' type='submit'><Link to='../register' className='text-white'>Edit Your Profile</Link></button>
            
          </div>
          
          <div className='col-md-10 bg-main-light '>

           <div className='container my-5'>
            <div className='row text-center'>

                <h6 className='fs-4 fw-bold '>Purchased Products</h6>
  
          <div className='container mt-3'>
            <div className='row text-center'>
            <div className='col-md-2'>
            <div className="product">
                <img src={product9} className='w-100'  alt="" />
                <button className='btn bg-main text-white w-100 my-3'>Remove from list</button>
            </div>
            </div>
            <div className='col-md-2'>
            <div className="product">
                <img src={product10} className='w-100'  alt="" />
                <button className='btn bg-main text-white w-100 my-3'>Remove from list</button>
            </div>
            </div>
            <div className='col-md-2'>
            <div className="product">
                <img src={product11} className='w-100'  alt="" />
                <button className='btn bg-main text-white w-100 my-3'>Remove from list</button>
            </div>
            </div>
            <div className='col-md-2'>
            <div className="product">
                <img src={product12} className='w-100'  alt="" />
                <button className='btn bg-main text-white w-100 my-3'>Remove from list</button>
            </div>
            
              </div>
              </div>
              </div>
         
         
         
          <div className='col-md-12'>
              <h6 className='fw-bold fs-4'>Available Products</h6>


              <div className="container mt-3">
    <div className="row ">
      
          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

          <div className="product">
        <img src={product1} className='w-100'  alt="" />
          <h6 className='text-main mt-2 font-small fw-bolder'>Formic acid</h6>
          {/* <p className='fw-bolder'>Used in HPLC :If the pH of the mobile phase needs to be reduced to enhance LC separations, in leather tanning, as a decalcifier and cleaning product, as a chemical  reducing agent, O.</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
          <p className='my-0'>Expiry date : 7/2025</p>
          <p className='mt-3'>Price : 126 EGP</p>
          
          <button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
          </div>
          </Link>
          </div>   

          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product2} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Propanol</h6>
{/* <p className='fw-bolder'>Used in HPLC to reduce time of analysis and In molecular biology : */}
{/* Protocols for the use of isopropanol: DNA precipitation from mammalian tissue, ethidium bromide extraction from DNA samples, and RNA isolation from cells</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
    <p className='mt-3'>Price : 400 EGP</p>

<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div>  


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product3} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>CETRIMIDE (CN) AGAR BASE</h6>
{/* <p className='fw-bolder'>A selective medium for isolation and identification of Pseudomonas aeraeruginosa</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
    <p className='mt-3'>Price : 800 EGP</p>

<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div>  


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product4} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Catechol</h6>
{/* <p className='fw-bolder'>Pyrocatechol , 1,2 dihydroxybenzene</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
    <p className='mt-3'>Price : 410 EGP</p>

<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div>  


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product5} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Sudan (III) Powder for Microscopical Staining</h6>
{/* <p className='fw-bolder'>Sudan III is a red fat-soluble dye that is utilized in the identification of the presence of lipids, triglycerides and lipoproteins.</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
    <p className='mt-3'>Price : 160 EGP</p>

<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div>  
          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product6} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>DI Sodium Hydrogen Orthophosphate Anhydrous LR</h6>
{/* <p className='fw-bolder'>As analytical reagent functions as an emulsifier, stabilizer and texturizer; it also is a buffering agent</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
    <p className='mt-3'>Price : 200 EGP</p>

<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div>  



          </div>
          </div>
          </div>
            </div>
          </div>

          <div className='container-fluid my-5 '>
            <div className='row text-center m-auto'>
              <div className='col-md-6 m-auto'>

                <button className='btn bg-main text-white w-100 mt-3' type='submit'><Link to='../addproduct' className='text-white'>Add your own product</Link></button>


              </div>
            </div>
          </div>
          
          
          </div>
        </div>
      </div>

  </>
}
