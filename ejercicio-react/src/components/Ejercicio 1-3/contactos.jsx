import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contacto.class.js";
import Contacto from "./contacto.jsx";

const Contactos = ({contacto}) => {
    return (
        <div>
            <h2>NOMBRE : {contacto.nombre}</h2>
            <h3>APELLIDO : {contacto.apellido}</h3>
            <h3>EMAIL: {contacto.email}</h3>
            <Contacto estado ={true} />
        </div>
    )
}

Contactos.propTypes = {
    contacto: PropTypes.instanceOf(Contact)
}

export default Contactos
