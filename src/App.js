import Carrusel from "./Components/Carrusel/Carrusel";
import Navbar from "./Components/Navbar/Navbar";
import Pills from "./Components/Pills/Pills";
import NuevoCarrusel from "./Components/MultiCarrusel/nuevocarrusel";
// import Multicarrusel from "./Components/MultiCarrusel/Multicarrusel";
import Actividades from "./Components/ActividadesEventos/Actividades";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carrusel  />
      <Pills/> 
      {/* <Multicarrusel/> */}
      <NuevoCarrusel/> 
      <Actividades/>
    </div>
  );
}

export default App;
