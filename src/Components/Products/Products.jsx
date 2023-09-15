import React from 'react';
import styles from './Products.module.css'
import product1 from '../../assets/images/Products/prod1.jpeg'
import product2 from '../../assets/images/Products/prod2.jpeg'
import product3 from '../../assets/images/Products/prod3.jpeg'
import product4 from '../../assets/images/Products/prod4.jpeg'
import product5 from '../../assets/images/Products/prod5.jpeg'
import product6 from '../../assets/images/Products/prod6.jpeg'
import product7 from '../../assets/images/Products/prod7.jpeg'
import product8 from '../../assets/images/Products/prod8.jpeg'
import product9 from '../../assets/images/Products/prod9.jpeg'
import product10 from '../../assets/images/Products/prod10.jpeg'
import product11 from '../../assets/images/Products/prod11.jpeg'
import product12 from '../../assets/images/Products/prod12.jpeg'
import product13 from '../../assets/images/Products/prod13.jpeg'
import product14 from '../../assets/images/Products/prod14.jpeg'
import product15 from '../../assets/images/Products/prod15.jpeg'
import product16 from '../../assets/images/Products/prod16.jpeg'
import product17 from '../../assets/images/Products/prod17.jpeg'
import product18 from '../../assets/images/Products/prod18.jpeg'
import product19 from '../../assets/images/Products/prod19.jpeg'
import product20 from '../../assets/images/Products/prod20.jpeg'
import product21 from '../../assets/images/Products/prod21.jpeg'
import product22 from '../../assets/images/Products/prod22.jpeg'
import product23 from '../../assets/images/Products/prod23.jpeg'
import product24 from '../../assets/images/Products/prod24.jpeg'
import product25 from '../../assets/images/Products/prod25.jpeg'
import product26 from '../../assets/images/Products/prod26.jpeg'
import { Link } from 'react-router-dom'



export default function Products() {
  return <>
  
  <div className="container my-5">
    <div className="row ">


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

          <div className="product">
        <img src={product1} className='w-100'  alt="" />
          <h6 className='text-main mt-2 font-small fw-bolder'>Formic acid</h6>
          {/* <p className='fw-bolder'>Used in HPLC :If the pH of the mobile phase needs to be reduced to enhance LC separations, in leather tanning, as a decalcifier and cleaning product, as a chemical  reducing agent, O.</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
          <p className='my-0'>Expiry date : 7/2025</p>
          <div className='mt-0 d-flex justify-content-between align-items-center'>
              <span>Price: 125 EGP</span>
              <div>
                  <i className='fas fa-star rating-color my-3'></i>
                  4.5
              </div>
          </div>
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
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 400 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
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
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 800 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
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
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 410 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
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
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 160 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
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
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 200 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div>  



          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product7} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Catechol</h6>
{/* <p className='fw-bolder'>Pyrocatechol , 1,2 dihydroxybenzene</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 410 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 
<div className="product">
<img src={product8} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Product Name</h6>
{/* <p className='fw-bolder'>Used as antioxidant</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 650 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div>  



          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product9} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>PLATE COUNT AGAR</h6>
{/* <p className='fw-bolder'>Used in HPLC</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 900 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div>  


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product10} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Ethanol</h6>
{/* <p className='fw-bolder'>Used in chromatography</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 650 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div>  



          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product11} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Product Name</h6>
{/* <p className='fw-bolder'>Indole for biochemistry 2,3-Benzopyrrole</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 1800 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div>  



          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product12} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Chromium standard solution</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 420 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 



          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product13} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Acetyl acetone</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 500 ML</p>
    <p className='my-0'>Shelf life : 60 months</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 650 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product14} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Urea pellets</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 500 gm</p>
    <p className='my-0'>Shelf life : 6 months</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 300 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product15} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>DNA extraction kit</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 100 prep</p>
    <p className='my-0'>Shelf life : 12 months</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price:9000 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product16} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Tween -80</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 1 L</p>
    <p className='my-0'>Shelf life : 2 years</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 400 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product17} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Phenolphthalein Powder</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 950 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product18} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Dialysis tubing</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 900 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product19} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Potassium bromide</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price:2000 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product20} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Toluene</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 600 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product21} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Devarda's Alloy Powder</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 750 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product22} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Yeast extract</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 500 GM</p>
    <p className='my-0'>Shelf life : 6 months</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 450 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product23} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Sodium lauryl sulphate</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 250 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 500 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product24} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Ph paper</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 500 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product25} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Ph meter</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 400 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 


          <div className="col-md-2 mt-2">
          <Link to='../productdetails'> 

<div className="product">
<img src={product26} className='w-100' alt="" />
<h6 className='text-main mt-2 font-small fw-bolder'>Research pipette</h6>
{/* <p className='fw-bolder'>Used in spectrometry Bridging the gap between need and excess</p> */}
          <p className='mt-2'>Quantity : 400 gm</p>
    <p className='my-0'>Expiry date : 7/2025</p>
<div className='d-flex justify-content-between align-items-center'>
    <span>Price: 200 EGP</span>
    <div>
        <i className='fas fa-star rating-color my-3'></i>
        4.5
    </div>
</div>
<button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
</div>
</Link>
          </div> 




















    </div>  
  </div>  

  <nav aria-label="Page navigation example ">
  <ul className="pagination justify-content-center mb-5">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
    <li className="page-item"><a className="page-link text-white bg-main" href="#">1</a></li>
    <li className="page-item"><a className="page-link text-main" href="#">2</a></li>
    <li className="page-item"><a className="page-link text-main" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link text-main" href="#">Next</a>
    </li>
  </ul>
</nav>


  </>

}
