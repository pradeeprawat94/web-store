import React from 'react'
import Banner from '../../components/Banner/Banner'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts'
import Lists from '../../components/List/Lists'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const Home = () => {

  return (
    <div>
      <Banner/>
      <FeatureProducts type="Featured"/>
      <Lists/>
      <FeatureProducts type="Trending"/>
      <NewsLetter/>
    </div>
  )
}

export default Home