import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <h1 className="texto">Tienda Virtual</h1>

      <button className="boton" onClick={() => {navigate('capturar')}}>
        Captura de artículo
      </button>
      {/* <button onClick={() => {alert("una alerta")}}>Captura de artículo</button> */}
      <button className="boton" onClick={() => {navigate('comprar')}}>
        Compra de artículo
      </button>
    </div>
  );
}

export default Home;
