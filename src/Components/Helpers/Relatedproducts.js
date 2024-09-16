import React from 'react'
import img1 from "../../assets/Images_page-0004.jpg"
import img2 from "../../assets/Images_page-0005.jpg"
import img3 from "../../assets/Images_page-0006.jpg"
import img4 from "../../assets/Images_page-0002.jpg"
const Relatedproducts = () => {
  return [
    {
      name: 'Industrial Bearings',
      image: img1,
      price: 120,
      originalPrice: 160,
      rating: 4.5,
      reviews: 88,
    },
    {
      name: 'Tools & Services',
      image: img2,
      price: 960,
      originalPrice: 1160,
      rating: 4.0,
      reviews: 75,
    },
    {
      name: 'Universal Joints',
      image: img3,
      price: 370,
      originalPrice: 400,
      rating: 4.5,
      reviews: 99,
    },
    {
      name: 'Chains & Components',
      image: img4,
      price: 160,
      originalPrice: 170,
      rating: 4.3,
      reviews: 65,
    },
  ];
}

export default Relatedproducts
