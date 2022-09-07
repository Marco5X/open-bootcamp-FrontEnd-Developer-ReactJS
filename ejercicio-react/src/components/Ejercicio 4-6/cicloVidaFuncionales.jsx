import React, { useState, useEffect } from "react";

const Clockf = () => {
    const [inicioUser, setInicioUser] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José"
    });

    useEffect(() => {
        const timerID = setInterval(
            () => {
                actualiceUser()
            }, 1000
        );
        return () => {
            clearInterval(timerID);
        };
    });

    const actualiceUser = () => {
        return setInicioUser({
            fecha: inicioUser.fecha,
            edad: inicioUser.edad + 1,
            nombre: inicioUser.nombre,
            apellidos: inicioUser.apellidos,
        });
    };

    return (
        <div>
            <h2>
                Hora Actual:
                {inicioUser.fecha.toLocaleTimeString()}
            </h2>
            <h3>{inicioUser.nombre} {inicioUser.apellidos}</h3>
            <h1>Edad: {inicioUser.edad}</h1>

        </div>
    )
}

export default Clockf;