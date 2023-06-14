import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/navBar/Nav";
import Titulo from "./components/titulo/Titulo";
import Card from "./components/cards/Card";
import Buscador from "./components/buscador/Buscador";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
    {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. }
      {data.map((el, i) => {
        return <h1 key={i}>{el.city}</h1>;
      })*/}
      <main className="contenedorPrincipal">
        <Nav></Nav>
        <Titulo></Titulo>
        <section className="staysResults">
            {data.map((el, i) => {
              return <Card key={i} photo={el.photo} superHost={el.superHost} type={el.type} beds={el.beds} rating={el.rating} title={el.title}> </Card>;
            })}
        </section>
      </main>
    </>
  );
}

export default App;
