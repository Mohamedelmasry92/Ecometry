import React from 'react'
import styles from './HomeContent.module.css'
import ecometry from '../../assets/images/ECOMETRY-4.svg'
import { Link } from 'react-router-dom'

export default function HomeContent() {
  return <>    
<div className="items ">
        <div className="layout">
            <div className="header">
                <div className="text-center">
                  <div>
                    <h1>WELCOME TO </h1>
                    <h1 className='font-large text-main'>ECOMETRY</h1>
                    <h3 className="mt-3">Bridging The Gap Between Need & Excess</h3>
                  </div>
                </div>
            </div>
        </div>
    </div>



    <section id="services" className="bg-light pt-4  text-center">
        <div className="container">
            <div className="title pb-3">
                <h2 className='mt-5 fw-bold'>SERVICES</h2>
                <p>The advantages of selling on Ecometry !</p>
                <div className="line translate-middle"></div>
            </div>
            <div className="row mt-5 services">
                <div className="col-sm-6 col-md-4">
                    <div className=" bg-white shadow py-5 mb-5 rounded-4 hover">
                        <div className="icon d-flex m-auto justify-content-center align-items-center rounded-circle mb-4">
                        <i class="fa-solid fa-flask fs-2"></i>
                        </div>
                        <h3>Reach customers all over Egypt</h3>
                        <p>Show your products to all Ecometry's customers in all over Egypt and reach visits to your offers while you are at your place.</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className=" bg-white shadow py-5 mb-5 rounded-4 hover">
                        <div className="icon d-flex m-auto justify-content-center align-items-center rounded-circle mb-4">
                            <i class="fa-solid fa-bong fs-2"></i>
                        </div>
                        <h3>That's a great chance to boost your profits!</h3>
                        <p>Costs on Ecometry are simple, and you can make big profits after displaying and selling your chemical materials on Ecometry</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className=" bg-white shadow py-5 mb-5 rounded-4 hover">
                        <div className="icon d-flex m-auto justify-content-center align-items-center rounded-circle mb-4">
                            <i class="fa-solid fa-vial fs-2"></i>
                        </div>
                        <h3>Easy shipping chemiacal materials and delivery</h3>
                        <p>With Ecometric, you will buy all the chemicals you want from anywhere in Egypt easily and quickly</p>
                    </div>
                </div>

            </div>
        </div>

        <section className="background-img bg-light">
            <div className="overlay-blue"></div>
            <div className="container text-center text-white opacity-100">
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div>
                            <div className="mb-3 icon-sec m-auto d-flex justify-content-center align-items-center rounded-circle">
                                <i class="fa-solid fa-dumpster fs-1"></i>
                            </div>
                            <span className='fs-3 fw-bold'>25</span>
                            <p className='fw-bolder'>PURCHASE COMPLETED</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div>
                            <div className="mb-3 icon-sec m-auto d-flex justify-content-center align-items-center rounded-circle">
                              <i class="fa-solid fa-user-doctor fs-1"></i>
                            </div>
                            <span className='fs-3 fw-bold'>5</span>
                            <p className='fw-bolder'>YEARS OF EXPERIENCE</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div>
                            <div className="mb-3 icon-sec m-auto d-flex justify-content-center align-items-center rounded-circle">
                                <i class="fa-solid fa-users fs-1"></i>
                            </div>
                            <span className='fs-3 fw-bold'>+550</span>
                            <p className='fw-bolder'>TOTAL CLIENTS</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div>
                            <div className="mb-3 icon-sec m-auto d-flex justify-content-center align-items-center rounded-circle">
                              <i class="fa-solid fa-award fs-1"></i>
                            </div>
                            <span className='fs-3 fw-bold'>18</span>
                            <p className='fw-bolder'>AWARD WON</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
    </section>





            <div className="title pb-3 text-center">
                <h2 className='mt-5 fw-bold'>PRODUCTS</h2>
                <p className='fs-5'>Great products for great people</p>
                <div className="line translate-middle"></div>
            </div>


  </>
}
