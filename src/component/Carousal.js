import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function CarouselPage() {
  return (
    <div className="Carosal">
    <Carousel>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src="https://www.impact.upenn.edu/wp-content/uploads/2016/03/POVERTY-BW.jpg"
        alt="First slide"
        height="400px"
        width="100%"
      />
      <Carousel.Caption>
        <h3>Help Poor People</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src="https://www.impact.upenn.edu/wp-content/uploads/2016/03/POVERTY-BW.jpg"
        alt="Second slide"
        height="400px"
        width="100%"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src="https://www.impact.upenn.edu/wp-content/uploads/2016/03/POVERTY-BW.jpg"
        alt="Third slide"
        height="400px"
        width="100%"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage;