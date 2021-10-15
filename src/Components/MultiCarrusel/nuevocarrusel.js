import React, { Component } from "react";
import Slider from "react-slick";
import  "../MultiCarrusel/style.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

export default class NuevoCarrusel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow:<SampleNextArrow/>,
      prevArrow:<SamplePrevArrow/>,
    };
    return (
      <div className="prueba2" style= {{margin:50,  alignItems:"center"}}>
        <h2> Multiple items </h2>
        <Slider {...settings}>

            {[1,2,3,4,5,6,7,8,9,10].map((item,i)=> (

          <div >
              <div className="prueba">
            <h3  >{i} </h3>

              </div>
          </div>
            ))}

        </Slider>
      </div>
    );
  }
}