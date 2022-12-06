import React from "react";
import '../css/testimonio.css';


function Testimonio(props) {
    return (
      <div className= 'contenedor-testimonio'>
        <img className= "imagen-testimonio"
        src={require(`../images/img${props.imagen}.png`)}
        alt='Foto de:'/>
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testi">
            <strong>{props.nombre}</strong> en {props.pais}</p>
          <p className="cargo-testi">{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className="texto-testi">"{props.testimonio}"</p>
        </div>

      </div>

      
    );
}

export default Testimonio;