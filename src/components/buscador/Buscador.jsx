import { useState } from "react";
import "./Buscador.css";

export default function Buscador({ arreglo, estado, accionBuscador }) {
  const [lista, setLista] = useState([]);

  const [noAdultos, setNoAdultos] = useState (0);
  const [noNinos, setNoNinos] = useState (0);
  const [totalGuests, setTotatGuests] = useState (0);
  const [estadoAG, setEstadoAG] = useState (false)

  const filterList = (e) => {
    let inputValue = e.target.value.toLowerCase();

    if (inputValue === "") {
      setLista([]);
    } else {
      const FILTERED = arreglo.filter((el) => {
        return el.city.toLowerCase().includes(inputValue);
      });

      setLista(FILTERED);
    }
  };
  let sumarAdultos = (noAdultos)=>{
    let newNoAdultos;
    newNoAdultos = noAdultos+1;
    calcularNoPersonas(newNoAdultos, noNinos);
    setNoAdultos(newNoAdultos);
  }
  let restarAdultos = (noAdultos)=>{
    if (noAdultos==0) return noAdultos;
    let newNoAdultos;
    newNoAdultos = noAdultos-1;
    calcularNoPersonas(newNoAdultos, noNinos);
    setNoAdultos(newNoAdultos);
  }
  let sumarNinos = (noNinos)=>{
    let newNoNinos;
    newNoNinos = noNinos+1;
    calcularNoPersonas(noAdultos, newNoNinos);
    setNoNinos(newNoNinos);
  }
  let restarNinos = (noNinos)=>{
    if (noNinos==0) return noNinos;
    let newNoNinos;
    newNoNinos = noNinos-1;
    calcularNoPersonas(noAdultos, newNoNinos);
    setNoNinos(newNoNinos);
  }
  function calcularNoPersonas (adultos, ninos){
    let resultado = adultos + ninos;
    setTotatGuests(resultado);
  }
  function mostrarSeccionAG(){
    let newEstado = !estadoAG;
    setEstadoAG(newEstado)
  }

  let claseBuscador;
  if (estado == true) {
    claseBuscador = "buscador";
  } else {
    claseBuscador = "buscadorEscondido";
  }

  let cuadroGris;
  if(estado==true){
    cuadroGris = "cuadroGrisDesplegado"
  }else{
    cuadroGris = "cuadroGrisEscondido"
  }
  
  let claseAG;
  estadoAG ? claseAG = 'add-guests-buttons-division' : claseAG = 'add-guests-buttons-division-escondido'
  return (
    <>
      <div className={claseBuscador}>
        <div className="contenedor-buscador-entradas">
          <div className="todos-buscadores">
            <div className="div-buscarExtendido">
              <div className="buscador-titulo">
                <small>Location</small>
              </div>
              <input
                className="input-location-guests"
                placeholder="Add location"
                onKeyUp={filterList}
              ></input>
            </div>
            <div className="div-buscarExtendido" id="noTotalGuests" onClick={mostrarSeccionAG}>
              <div className="buscador-titulo">
                <small>Guests</small>
              </div>
              <p
                id="total-guests-out"
              > {totalGuests} </p>
            </div>
            <button id="boton-buscarExtendido">
              <div className="contenedor-icono-buscarExtendido">
                <span class="material-symbols-outlined">search</span>
              </div>
              <p>Search</p>
            </button>
          </div>
        </div>
        <div className="buscador-parte-inferior">
          <ul id="coincidencias-busqueda">
            {lista.map((el, index) => (
              <li key={index} className="coincidencia">
                <div className="contenedor-coincidencia">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="4F4F4F "
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <a href="#">
                    {el.city} , {el.country}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div className="add-guests-buttons">
            <div className={claseAG}>
              <h4>Adults</h4>
              <small>Ages 13 or above</small>
              <div className="seccion-botones-suma">
                <button onClick={()=>{restarAdultos(noAdultos)}}>-</button>
                <p> {noAdultos} </p>
                <button onClick={()=>{sumarAdultos(noAdultos)}}>+</button>
              </div>
            </div>
            <div className={claseAG}>
              <h4>Children</h4>
              <small>Ages 2-12</small>
              <div className="seccion-botones-suma">
                <button onClick={()=>{restarNinos(noNinos)}}>-</button>
                <p> {noNinos} </p>
                <button onClick={()=>{sumarNinos(noNinos)}}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cuadroGris} onClick={accionBuscador}>

      </div>
    </>
  );
}
