import React from "react";


export const Contact = ({contacto, conexionContact, deleteContact}) => {

    return (
        <div>
            <h2>{contacto.nombre}</h2>
            <span>{contacto.email}</span>

            <button
                style={{ backgroundColor: contacto.conectado? 'green' : 'red' }}
                onClick={() => { conexionContact(contacto); 
            }}>
                {contacto.conectado ? 'Conectado' : 'Desconectado'}
            </button>

            <button onClick={() => deleteContact(contacto)}>
                Borrar
            </button>
        </div>
    )
}