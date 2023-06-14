import './Buscador.css'

export default function Buscador(){
    return(
        <div className="buscador">
            <div className='contenedor-buscador'>
                <div className='todos-buscadores'>
                    <div className='div-buscarExtendido'>
                        <div className='buscador-titulo'>
                            <small>Location</small>
                        </div>
                        <input className='input-location-guests' placeholder='Add location'></input>
                    </div>
                    <div className='div-buscarExtendido'>
                        <div className='buscador-titulo'>
                            <small>Guests</small>
                        </div>
                        <input className='input-location-guests' placeholder='Add guests'></input>
                    </div>
                    <button id="boton-buscarExtendido">
                        <div className='contenedor-icono-buscarExtendido'>
                            <span class="material-symbols-outlined">
                                search
                            </span>
                        </div>
                        <p>Search</p>
                    </button>
                </div>
            </div>
        </div>
    )
}