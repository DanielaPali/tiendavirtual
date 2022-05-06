import Regresar from "./Regresar";
import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import {postPeticion} from '../API/peticiones';

function Capturar (){
  const [descripcion,setDescripcion] = useState("");
  const [cantidad,setCantidad] = useState("");
  const [precio,setPrecio] = useState("");
  const [foto,setFoto] = useState();
  const [fotoBytes, setFotoBytes]= useState();

  function leerFoto(event) {
    const reader = new FileReader();
    const fileByteArray = [];
    
    let file = event.target.files[0];
    file.arrayBuffer().then((res) => setFotoBytes(res));

    console.log( file.arrayBuffer());
    setFoto(URL.createObjectURL(file));
  }
function capturarArticulo () {
  let articulo = {
    descripcion: descripcion,
    cantidad: cantidad,
    precio: precio,
    foto: fotoBytes
  }
  console.log(articulo);
  postPeticion(articulo, "https://52.255.201.243:8080/Servicio/rest/ws");
}

 return <div className="centrar">
     <h1>Capturar</h1>
     <h2>Datos del Artículo</h2>
     <Form>
  <Form.Group className="mb-3 centrar" controlId="formBasicEmail">
    <Form.Label>Nombre</Form.Label>
    <Form.Control className="formu" type="text" placeholder="Ingrese el nombre" />
  </Form.Group>

  <Form.Group className="mb-3 centrar" controlId="formBasicEmail">
    <Form.Label>Descripción</Form.Label>
    <Form.Control value={descripcion} onChange={(event) => {setDescripcion(event.target.value)}} className="formu" type="text" placeholder="Ingrese la descripción" />
  </Form.Group>

  <Form.Group className="mb-3 centrar" controlId="formBasicEmail">
    <Form.Label>Cantidad</Form.Label>
    <Form.Control value={cantidad} onChange={(event) => {setCantidad(event.target.value)}} className="formu" type="number" placeholder="Ingrese la cantidad" />
  </Form.Group>

  <Form.Group className="mb-3 centrar" controlId="formBasicEmail">
    <Form.Label>Precio</Form.Label>
    <Form.Control value={precio} onChange={(event) => {setPrecio(event.target.value)}} className="formu" type="number" placeholder="Ingrese el precio" />
  </Form.Group>
  
  <Form.Group className="mb-3 centrar" controlId="formBasicEmail">
    <Form.Label>Foto</Form.Label>
  <Form.Control  className="formu" type="file" onChange={(event) => {leerFoto(event)}} multiple={false} accept="image/*"/>
  </Form.Group>

</Form>
<img alt="" width="300 px" height="400 px" src={foto}/> <br/>
<button onClick={capturarArticulo}>Enviar</button>
 <Regresar/>
 </div>

}

export default Capturar;