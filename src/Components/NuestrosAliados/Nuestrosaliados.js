import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import imagen4 from "../../imagen/imagen4.jpg"
import {Contenedor,EstiloCarta} from "../../Components/NuestrosAliados/EstiloAliados"

export default function ActionAreaCard({item}) {
  

  return (


    <EstiloCarta>
        <Card sx={{ maxWidth: 345,margin:5 }}>
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
