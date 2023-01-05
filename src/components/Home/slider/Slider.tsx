import './style.css'
import Carousel from 'react-bootstrap/Carousel';
import ImgOne from '../../../assets/sourceOne.png'
import ImgTwo from '../../../assets/sourceTwo.png'
import ImgThree from '../../../assets/sourceThree.png'
import ImgFour from '../../../assets/sourceFour.png'
import ImgFive from '../../../assets/sourceFive.png'
import ImgSix from '../../../assets/sourceSix.png'
import ImgSeven from '../../../assets/sourceSeven.png'
import ImgEight from '../../../assets/sourceEight.png'
import { Container } from 'react-bootstrap';
import { motion } from "framer-motion"

function Slides() {

  return (
    <Container>
      <motion.div
      whileHover={{ scale: 1.15 }}
      transition={{ duration: 1}}
      >
        <Carousel id='corousel'>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 rounded"
              src={ImgOne}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 rounded"
              src={ImgTwo}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 rounded"
              src={ImgThree}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 rounded"
              src={ImgFour}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 rounded"
              src={ImgFive}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 rounded"
              src={ImgSix}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 rounded"
              src={ImgSeven}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 rounded"
              src={ImgEight}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </motion.div>
    </Container>
  );
}

export default Slides;