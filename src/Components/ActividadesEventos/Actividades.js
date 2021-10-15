import React from 'react'
import "./Estiloactividades.js";
import { Prueba } from '../ActividadesEventos/Estiloactividades';
export default function Actividades() {
    return (
        <div className="test">
            
            <ul class="nav flex-column">
  <li class="nav-item">

 <Prueba class="nav-link active" aria-current="page" href="#"> Active </Prueba> 
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
            
        </div> 
    )
}
