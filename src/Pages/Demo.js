import React from 'react'
import Carrusel from '../Components/Carrusel/Carrusel'
import Actividades from "../Components/ActividadesEventos/Actividades"
import Directorio from "../Components/Directoriotelefono/Directorio"
import NuevoCarrusel from '../Components/MultiCarrusel/nuevocarrusel'
import Nuestrosaliados from "../Components/NuestrosAliados/Nuestrosaliados"
import Pills from "../Components/Pills/Pills"
const Demo = () => {
    return (
        <div>
             <Carrusel/>
             <Pills/>
             <NuevoCarrusel/>
             <Actividades/>
             <Directorio/>
             <Nuestrosaliados/>
        </div>
    )
}
export default Demo 
