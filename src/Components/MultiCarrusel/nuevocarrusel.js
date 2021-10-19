import React, { Component } from "react";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import imagen4 from "../../imagen/imagen4.jpg"
import {Contenedor,EstiloCarta} from "../../Components/NuestrosAliados/EstiloAliados"
import { Prueba,Prueba2 } from "../MultiCarrusel/Estilomulticarrusel";
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
      <Prueba2  style= {{margin:50,  alignItems:"center"}}>
        <h2> Multiple items </h2>
        <Slider {...settings}>

            {arrayItems.map((item,i)=> (

          <div >
              {/* <Prueba >
            < h3 >{i} </h3>
              </Prueba> */}
              <ActionAreaCard item={item} />
          </div>
            ))}

        </Slider>
      </Prueba2>
    );
  }
}