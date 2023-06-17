import { useState } from "react";
import "./Buscador.css";

export default function Buscador({ arreglo, estado }) {
  const [lista, setLista] = useState([]);

  const [noAdultos, setNoAdultos] = useState (0);
  console.log(noAdultos)

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
  let claseBuscador;
  if (estado == true) {
    claseBuscador = "buscador";
  } else {
    claseBuscador = "buscadorEscondido";
  }
  let sumarAdultos = (noAdultos)=>{
    let newNoAdultos;
    newNoAdultos = noAdultos+1;
    setNoAdultos(newNoAdultos);
  }
  let restarAdultos = (noAdultos)=>{
    let newNoAdultos;
    newNoAdultos = noAdultos-1;
    setNoAdultos(newNoAdultos);
  }
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
            <div className="div-buscarExtendido">
              <div className="buscador-titulo">
                <small>Guests</small>
              </div>
              <input
                className="input-location-guests"
                placeholder="Add guests"
              ></input>
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
            <div className="add-guests-buttons-division">
              <h4>Adults</h4>
              <small>Ages 13 or above</small>
              <div className="seccion-botones-suma">
                <button onClick={()=>{restarAdultos(noAdultos)}}>-</button>
                <p>{noAdultos}</p>
                <button onClick={()=>{sumarAdultos(noAdultos)}}>+</button>
              </div>
            </div>
            <div className="add-guests-buttons-division">
              <h4>Children</h4>
              <small>Ages 2-12</small>
              <div className="seccion-botones-suma">
                <button>-</button>
                <p>0</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
