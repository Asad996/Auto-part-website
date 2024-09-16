import React from 'react'
import img1 from "../../assets/Images_page-0004.jpg"
import img2 from "../../assets/Images_page-0005.jpg"
import img3 from "../../assets/Images_page-0006.jpg"
const ProductQuality = () => {
  return [
    {
      src: img1,
      alt: 'Product 1',
      title: 'Unmatched product quality with Exceptional Technical Support',
      description: 'Lorem ipsum dolor sit amet consectetur. Euismod pellentesque dui nulla aliquam. Sed non metus dui maecenas maecenas.',
      buttonText: 'Get in touch',
    },
    {
      src: img2,
      alt: 'Product 2',
      title: 'Second Slide Title',
      description: 'This is the description for the second slide. It contains different content.',
      buttonText: 'Learn more',
    },
    {
      src: img3,
      alt: 'Product 3',
      title: 'Third Slide Title',
      description: 'This is the description for the third slide. More different content here.',
      buttonText: 'Discover more',
    },
    // Add more image objects as needed
  ];
}

export default ProductQuality
