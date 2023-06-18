import Card from "../cards/Card";
import "./Resultados.css"

export default function Resultados({datos}) {
  
  return (
    <section className="staysResults">
            {datos.map((el, i) => {
              return <Card key={i} photo={el.photo} superHost={el.superHost} type={el.type} beds={el.beds} rating={el.rating} title={el.title}> </Card>;
            })}
    </section>
  );
}