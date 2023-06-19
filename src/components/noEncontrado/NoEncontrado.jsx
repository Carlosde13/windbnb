import "./NoEncontrado.css"

export default function NoEncontrado({resultado}){
    if (resultado!=0) return
    return(
        <>
            <h2 id="not-found-message">Sorry, we don't have results </h2>
            <span class="material-symbols-outlined">
                wrong_location
            </span>
        </>
        
    )
}