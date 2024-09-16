import img1 from "../../assets/Images_page-0004.jpg"
import img2 from "../../assets/Images_page-0005.jpg"
import img3 from "../../assets/Images_page-0006.jpg"
const Carousel = () => {
  return [
    {
        url: img1,
        
        text: "This is the first slide. It contains some example text and a button.",
        buttonText: "Explore"
      },
      {
        url: img2,
        
        text: "This is the second slide. It contains some example text and a button.",
        buttonText: "Explore"
      },
      {
        url: img3,
        
        text: "This is the third slide. It contains some example text and a button.",
        buttonText: "Explore"
      }
  ]
}

export default Carousel
