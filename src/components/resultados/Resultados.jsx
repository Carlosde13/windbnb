import { useState } from "react";
import Card from "../cards/Card";
import "./Resultados.css"
import NoEncontrado from "../noEncontrado/NoEncontrado";


export default function Resultados({datos, invitados}) {

    let conteo = 0;
  return (
    <>
      <section className="staysResults">
              {datos.map((el, i) => {
                if(invitados==0){
                  conteo++;
                  return <Card key={i} photo={el.photo} superHost={el.superHost} type={el.type} beds={el.beds} rating={el.rating} title={el.title}> </Card>;
                }else if(invitados <= el.maxGuests){
                  conteo++;
                  return <Card key={i} photo={el.photo} superHost={el.superHost} type={el.type} beds={el.beds} rating={el.rating} title={el.title}> </Card>;
                }
              })}
              
      </section>
      <NoEncontrado resultado={conteo}/>
    </>  
  );
}

