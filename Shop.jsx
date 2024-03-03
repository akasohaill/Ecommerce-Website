import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/Popular'
import Offer from '../component/Offers/Offer'
import NewCollections from '../component/NewCollections/NewCollections'
import NewsLetter from '../component/Newsletter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
