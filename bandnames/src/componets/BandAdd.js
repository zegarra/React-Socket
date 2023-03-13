import React, {useContext, useState} from "react";
import { SocketContext } from "../context/SocketContext";

const BandAdd = () => {
const [valor, setValor] = useState('');
const {socket} = useContext(SocketContext);

  const onSubmit=(ev)=>{
  ev.preventDefault();
  if(valor.trim().length>0){
    socket.emit('nueva-banda', {nombre:valor});
    setValor('');
  }
}
  return(
    <div>
         <h3>Agregar banda</h3>
    <form onSubmit={onSubmit}>
        <input 
          className="form-control" 
          placeholder="New name band"
          value={valor}
          onChange={(ev) => setValor(ev.target.value)}
          />
          
    </form>
    </div>
   
    );
};

export default BandAdd;
