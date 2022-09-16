import React, { useState } from "react";
import { Contact } from "./Contacto";
import { FormContact } from "./FormContact";


export const Contacts = () => {

    const defalutContact = [
        { nombre: "Marc", email: "marc@mail.com", conectado: true }
    ];

    const [contact, setContact] = useState(defalutContact);

    function conexionContact(contacto) {
        const index = contact.indexOf(contacto)
        const tempContact = [...contact]
        tempContact[index].conectado = !tempContact[index].conectado;
        setContact(tempContact);
    }

    function deleteContact(contacto) {
        const index = contact.indexOf(contacto);
        const tempContact = [...contact];
        tempContact.splice(index, 1);
        setContact(tempContact);
    }

    function addContact(contacto) {
        const tempContact = [...contact];
        tempContact.push(contacto);
        setContact(tempContact);
    }

    return (
        <div>
            <h2>List Contacts</h2>
            {contact.map((contacto, index) => {
                return (
                    <Contact
                        key={index}
                        contacto={contacto}
                        conexionContact={conexionContact}
                        deleteContact={deleteContact} />
                )
            }
            )}
            <FormContact onAddContact={addContact} />
        </div>
    )
}