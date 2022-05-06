import { useNavigate } from "react-router-dom";

function Regresar (){
    const navigate = useNavigate();

    return <button className="boton" onClick={() => {navigate(-1)}}>Regresar</button>
   }
   
   export default Regresar;