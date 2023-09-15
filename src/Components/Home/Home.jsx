import React from 'react'
import styles from './Home.module.css'
import Products from '../Products/Products'
import HomeContent from '../HomeContent/HomeContent'

export default function Home() {
  return <>    
    <HomeContent/>
    <Products/>
  </>
}
