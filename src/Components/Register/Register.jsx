import React from 'react'
import styles from './Register.module.css'
import { Link } from 'react-router-dom'


export default function Register() {
  
  return <>

      <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 bg-white m-auto shadow-lg px-5 py-4 mt-2 ">
                <h2 className='mb-2'>Register Now : </h2>   
                             <label className='fw-bold w-25 mt-5' htmlFor="name">Name :</label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter your name' type="text" name='name' id='name' />
                 
                             <label className='fw-bold w-25 mt-5' htmlFor="email">Email :</label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter your email'  type="email" name='email' id='email' />
                 
                             <label className='fw-bold w-25 mt-5' htmlFor="phone">Phone :</label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter your phone'  type="tel" name='phone' id='phone' />
                 
                             <label className='fw-bold w-25 mt-5' htmlFor="wPhone">What's app phone :</label>
                             <input className='form-control my-2 d-inline w-75' placeholder="Enter your what's app phone"  type="tel" name='phone' id='phone' />
                 
                             <label className='fw-bold w-25 mt-5' htmlFor="address">Address (details) :</label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter your address'  type="text" name='address' id='address' />
                 
                             <label className='fw-bold w-25 mt-5' htmlFor="job">Job :</label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter your job' type="text" name='job' id='job' />

                             <label className='fw-bold w-25 mt-5' htmlFor="jLocation">Job location  : </label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter job location'  type="text" name='jLocation' id='jLocation' required />

                             <label className='fw-bold w-25 mt-5' htmlFor="interest">Research interests : </label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter your research interest'  type="text" name='interest' id='interest' required />

                             <label className='fw-bold w-25 mt-5' htmlFor="degree">Academic degree : </label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter your academic degree'  type="text" name='degree' id='degree' required />

                             <label className='fw-bold w-25 mt-5' htmlFor="image">Your image : </label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter your image'  type="file" name='image' id='image' required />

                                            
                             <label className='fw-bold w-25 mt-5' htmlFor="password">Password :</label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter new password'  type="password" name='password' id='password' />
                             
                 
                             <label className='fw-bold w-25 mt-5' htmlFor="rePassword">Re-password :</label>
                             <input className='form-control my-2 d-inline w-75' placeholder='Enter re-password'  type="password" name='rePassword' id='rePassword' />
                             

                          <p className='text-center fw-bold mt-4'>Already Have An Account? <Link to='../login' className='border-2 border-black border-bottom'> Log in</Link></p>


                             <button className='btn bg-main text-white w-100 mt-2' type='submit'><Link to='../' className='text-white'> Register</Link></button>
                </div>
            </div>
        </div>



  </>

}
