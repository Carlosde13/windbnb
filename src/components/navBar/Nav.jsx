import Buscador from "../buscador/Buscador";
import "./Nav.css"

export default function Nav({accion , estado, arreglo}) {
  if (estado==true) return <Buscador arreglo={arreglo}/>
  return (
    <nav id="nav">
      <div className="iconoPrincipal">
        <img src="../../../public/logo.svg" alt="web page logo" id='windbnb-icon'/>
      </div>
      <div className="searchAll">
        <input placeholder="Add Location" id="input-location" className="input" onClick={accion}></input>
        <input placeholder="Add guests" id="input-guests" className="input" onClick={accion}></input>
        <button className="iconoBusqueda" onClick={accion}>
          <span class="material-symbols-outlined" id="icono-busqeda-span">search</span>
        </button>
      </div>
    </nav>
  );
}