import React from 'react'
import styles from './About.module.css'
import aboutImg from '../../assets/images/about.jpeg'


export default function About() {
  return <>    

            <div className="title pb-3 text-center">
                <h2 className='mt-5 fw-bold'>Who We Are?</h2>
                <p className='fs-5'>Great products for great people</p>
                <div className="line translate-middle"></div>
            </div>
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <img src={aboutImg} className='w-100' alt='' />
        </div>      
        <div className='col-md-6 text-center'>
          
          <p className='fs-5'>We are a team of passionate people whose goal is to improve everyone's life through exceptional products. We make great products to solve your business problems.</p>
          <p className='fs-5 mt-4'>Our products are designed for small and medium-sized businesses that want to improve their performance.</p>

        </div>      
      </div>      
    </div>      

  </>
}
