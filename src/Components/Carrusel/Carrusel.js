import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import imagen1  from "../../imagen/imagen1.jpg";
import imagen2  from "../../imagen/imagen2.jpg";
import imagen3  from "../../imagen/imagen3.jpg";

const Carrusel = () => {
  return (

    // <MDBContainer style={{width:'100%', marginleft:-10}}>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
      style={{heigth:'100%'}}
      autoPlay loop muted
    >
      <MDBCarouselInner style={{heigth:'100%'}}>
        <MDBCarouselItem itemId="1" >
          <MDBView >
            <img 
              className="d-block w-100"
              src={imagen1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

 <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={imagen2}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={imagen3}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

      </MDBCarouselInner>
    </MDBCarousel>
    // </MDBContainer>
  );
}

export default Carrusel
;