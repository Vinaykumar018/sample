import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src="/anime-girls-anime-nekomimi-red-wallpaper-preview.jpg" alt="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="anime-manga-anime-girls-simple-background-wallpaper-preview.jpg" alt="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="wonder-egg-priority-ai-ooto-artwork-anime-girls-anime-hd-wallpaper-preview.jpg" alt="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <div className="mt-5">  <div className="container">
      <div className="row">
        {/* First Row */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.powercitynetwork.com/assets/images/voip/computer-services-and-support.png" className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Some text to explain about card 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.powercitynetwork.com/assets/images/voip/computer-services-and-support.png" className="card-img-top" alt="Image 2" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Some text to explain about card 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.powercitynetwork.com/assets/images/voip/computer-services-and-support.png" className="card-img-top" alt="Image 3" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Some text to explain about card 3.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Second Row (Repeat) */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.powercitynetwork.com/assets/images/voip/computer-services-and-support.png" className="card-img-top" alt="Image 4" />
            <div className="card-body">
              <h5 className="card-title">Card 4</h5>
              <p className="card-text">Some text to explain about card 4.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.powercitynetwork.com/assets/images/voip/computer-services-and-support.png" className="card-img-top" alt="Image 5" />
            <div className="card-body">
              <h5 className="card-title">Card 5</h5>
              <p className="card-text">Some text to explain about card 5.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.powercitynetwork.com/assets/images/voip/computer-services-and-support.png" className="card-img-top" alt="Image 6" />
            <div className="card-body">
              <h5 className="card-title">Card 6</h5>
              <p className="card-text">Some text to explain about card 6.</p>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  </div>

  );
}

export default Home;
