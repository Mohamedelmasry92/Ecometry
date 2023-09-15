import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'


export default function Login() {


  return <>
  
      <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 py-5 bg-white m-auto px-5 py-5 mt-2 shadow-lg">
                <h2 className='my-3'>Login Now : </h2>

            <label htmlFor="email" className='fw-bold w-25 mt-5'>Email :</label>
            <input className='form-control my-3 d-inline w-75' placeholder='Enter Your Email'  type="email" name='email' id='email' />

            <label htmlFor="password" className='fw-bold w-25 mt-5'>Password :</label>
            <input className='form-control my-3 d-inline w-75' placeholder='Enter Your Password'  type="password" name='password' id='password' />
            
            <p className='text-center fw-bold mt-4'>Don't Have An Account? <Link to='../register' className='border-2 border-black border-bottom'> Sign Up</Link></p>

            <button className='btn bg-main text-white w-100 mt-4' type='submit'><Link to='../' className='text-white'>Login</Link></button>
                </div>
            </div>
        </div>

  </>


}
