import React, { useState } from 'react';
import PropTypes from "prop-types";

const Contacto = (estado) => {
    const [conectado, setConectado] = useState(estado);
    return (
        <div>
            <h3> {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
            <button
                onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}
            </button>
        </div>
    );
}

Contacto.propTypes = {
    estado: PropTypes.bool,
};

export default Contacto;