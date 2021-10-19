
import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import imagen4 from "../../imagen/imagen4.jpg"
import {Contenedor,EstiloCarta} from "../../Components/NuestrosAliados/EstiloAliados"

const arreglo = [
    {
        id:1,
        titulo:"item1",
        descripcion:"descripcion item 1",
        imagen: "imagen/imagen1.jpg"
      },
      {
        id:2,
        titulo:"item2",
        descripcion:"descripcion item 2",
        imagen: "imagen/imagen2.jpg"
      },
      {
        id:3,
        titulo:"item3",
        descripcion:"descripcion item 3",
        imagen: "imagen/imagen3.jpg"
      }
      

]

export default function ActionAreaCard2({item}) {  
  return (
    <EstiloCarta>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item?.imagen}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item?.descripcion}
              </Typography>
            </CardContent>
            
          </CardActionArea>
        </Card>   
    </EstiloCarta>
  );
}

