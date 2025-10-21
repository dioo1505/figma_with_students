import React from 'react'
import Healthcare from '../../components/healthcare/Healthcare'
import Services from '../../components/services/Services'
import Providers from '../../components/providers/Providers'
import Mobile from '../../components/mobile/Mobile'
import Customer from '../../components/customer/Customer'
import Article from '../../components/article/Article'

const Home = () => {
  return (
    <div>
      <Healthcare/>
      <Services/>
      <Providers/>
      <Mobile/>
      <Customer/>
      <Article/>
    </div>
  )
}

export default Home
