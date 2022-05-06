import Regresar from "./Regresar";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { postPeticion } from "../API/peticiones";

const baseUrl =
  window.location.protocol + "//" + window.location.host + "/Servicio/rest/ws";

function Capturar() {
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [foto, setFoto] = useState();
  const [fotoBytes, setFotoBytes] = useState();

  function leerFoto(event) {
    let file = event.target.files[0];
    setFoto(URL.createObjectURL(file)); /** Muestra la foto */

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setFotoBytes(reader.result)
    };
  }

  function capturarArticulo() {
    let articulo = {
      descripcion: descripcion,
      cantidad: cantidad,
      precio: precio,
      foto: fotoBytes,
    };
    console.log(articulo);
    postPeticion(articulo, baseUrl);
  }

  return (
    <div className="centrar">
      <h1>Capturar</h1>
      <h3>Datos del Artículo</h3>
      <Form>
        <Form.Group className="mb-3 centrar" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            className="formu"
            type="text"
            placeholder="Ingrese el nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3 centrar" controlId="formBasicEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            value={descripcion}
            onChange={(event) => {
              setDescripcion(event.target.value);
            }}
            className="formu"
            type="text"
            placeholder="Ingrese la descripción"
          />
        </Form.Group>

        <Form.Group className="mb-3 centrar" controlId="formBasicEmail">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            value={cantidad}
            onChange={(event) => {
              setCantidad(event.target.value);
            }}
            className="formu"
            type="number"
            placeholder="Ingrese la cantidad"
          />
        </Form.Group>

        <Form.Group className="mb-3 centrar" controlId="formBasicEmail">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            value={precio}
            onChange={(event) => {
              setPrecio(event.target.value);
            }}
            className="formu"
            type="number"
            placeholder="Ingrese el precio"
          />
        </Form.Group>

        <Form.Group className="mb-3 centrar" controlId="formBasicEmail">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            className="formu"
            type="file"
            onChange={(event) => {
              leerFoto(event);
            }}
            multiple={false}
            accept="image/*"
          />
        </Form.Group>
      </Form>
      {foto ? <img alt="" width="300 px" height="400 px" src={foto} /> : null}
      <br />
      <button className="boton2" onClick={capturarArticulo}>
        Enviar
      </button>
      <Regresar />
    </div>
  );
}

export default Capturar;
