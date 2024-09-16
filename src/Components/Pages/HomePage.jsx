import React from 'react'
import Carouselbar from '../Home/Carouselbar'
import Productsbar from '../Home/Productsbar'
import Brands from '../Home/Brands'
import Banner from '../Home/Banner'
import Carousel2 from '../Home/Carousel2'
import TestimonialCarousel from '../Home/TestimonailCarousel'
import MapComponent from '../Home/MapComponent'
import EmailSubscription from '../Shared/EmailSubcription'


const HomePage = () => {
  return (
   <>
  <Carouselbar/>
  <Productsbar/>
  <Brands/>
  <Banner/>
  <Carousel2/>
  <TestimonialCarousel/>
  <MapComponent/>
<EmailSubscription/>
   </>
  )
}

export default HomePage
