import './Titulo.css'

export default function Titulo({numero}){
    let noResultados;
    if(numero == 0){
        noResultados = 14;
    }else{
        noResultados = numero;
    }
    return(
        <div className="titulo">
            <h1>Stays in Finland</h1>
            <p>{noResultados} stays</p>
        </div>
    )
}