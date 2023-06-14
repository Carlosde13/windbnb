import "./Card.css";

export default function Card({photo, superHost, type, beds, rating, title}) {

  let camas;
  if(beds>0 && beds !== 1){ 
    camas = ` - ${beds} beds`
  }else if(beds==1){
    camas = ` - ${beds} bed`
  }else{
    camas = ""
  }

  return (
    <div className="card">
      <div className="div-imagen">
        <img
          src={photo}
          alt="stay image"
        />
      </div>
      <div className="informacion-card">
        <div className="parte-superior">
          {
            superHost ? <div className="isSuperHost"><small>super host</small></div> : null
          }
          
          <small>{type}{camas}</small>
          <div className="div-calificacion">
            <div className="div-estrella">
              <span class="material-symbols-outlined">star</span>
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
