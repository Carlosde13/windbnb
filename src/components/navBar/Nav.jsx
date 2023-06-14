import "./Nav.css"

export default function Nav() {
  return (
    <nav id="nav">
      <div className="iconoPrincipal">
        <img src="src\img\logo.svg" alt="web page logo" id='windbnb-icon'/>
      </div>
      <div className="searchAll">
        <input placeholder="Add Location" id="input-location" className="input"></input>
        <input placeholder="Add guests" id="input-guests" className="input"></input>
        <button className="iconoBusqueda">
          <span class="material-symbols-outlined" id="icono-busqeda-span">search</span>
        </button>
      </div>
    </nav>
  );
}
