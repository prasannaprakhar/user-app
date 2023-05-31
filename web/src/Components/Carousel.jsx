import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

export const ImageSection = () => {
    return (
        
        <div className="img-section">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpA4Gee7rlLCv-e8h_a437njyTclEiKLeePQ&usqp=CAU"
          alt="First slide"
          id="cid"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgFtlC07T7gVBVFwZuQ-kQ7zgwDn7tV1o5Q&usqp=CAU"
          alt="Second slide"
          id="cid"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMuNNk-xa_-Anlc-xeCe0ywFeiQ3K3z-bfw&usqp=CAU"
          alt="Third slide"
          id="cid"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
        </div>
       
    

    )
}