import { padding } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";

import {Prueba2 } from "../MultiCarrusel/Estilomulticarrusel";
import ActionAreaCard from "../NuestrosAliados/Nuestrosaliados";

const arrayItems = [
  {
    titulo:"item1",
    descripcion:"descripcion item 1",
    imagen: "imagen/imagen1.jpg"
  },
  {
    titulo:"item2",
    descripcion:"descripcion item 2",
    imagen: "imagen/imagen2.jpg"
  },
  {
    titulo:"item3",
    descripcion:"descripcion item 3",
    imagen: "imagen/imagen3.jpg"
  },
  {
    titulo:"item4",
    descripcion:"descripcion item 4",
    imagen: "imagen/imagen4.jpg"
  },
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", margin:50,zIndex:999,
        position:"absolute",
        marginTop:10   }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  margin:50,zIndex:999,
         position:"absolute",
        marginTop:10,
        marginRight:1000   }}
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
      
      <Prueba2  >
        <h2> Multiple items </h2>

        <Slider className="test1" style={{marginLeft:"auto", marginRight:10}} {...settings}>

            {arrayItems.map((item,i)=> (

          <div className="pruebaDiv" >
            {
              <ActionAreaCard style={{ marginRight:10}}  item={item}  />}
          </div>
            ))}

        </Slider>
      </Prueba2>
    );
  }
}