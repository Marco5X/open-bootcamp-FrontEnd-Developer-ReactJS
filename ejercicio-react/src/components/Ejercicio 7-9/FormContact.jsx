import React, {useRef} from "react";


export const FormContact = ({onAddContact}) => {
    const name = useRef("");
    const email = useRef("");
    
    function addContact(e) {
        e.preventDefault();
    
        const newContact = { nombre: name.current.value, email: email.current.value, conectado: true };
            
        onAddContact(newContact);
        name.current.value = "";
        email.current.value = "";
      }

    return (
        <div>
            <form onSubmit={addContact}>
                <h3>ADD CONTACT</h3>
                <input name="name" type="text" placeholder="Name" ref={name}/>
                <input name="email" type="email" placeholder="Email" ref={email}/>
                <button type="submit" onClick={addContact} >Add Contact</button>
            </form>            
        </div>
    )
}