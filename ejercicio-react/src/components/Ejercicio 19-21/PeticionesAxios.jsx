import React, { useState, useEffect } from "react";
import axios from "axios"


export const Chistes = () => {
    const [chiste, setChiste] = useState()
    const [gusta, setGusta] = useState(0)
    const [noguta, setNoguta] = useState(0)

    useEffect(() => { });

    const generateChiste = () => {
        axios.get("https://api.chucknorris.io/jokes/random")
            .then((resp) => setChiste(resp.data))
            .catch((error) => console.error(error))
    }

    const contador = (setConta, conta) => {
        setConta(conta + 1);
        generateChiste();
    }

    return (
        <div >
            <h1>Chistes Random</h1>
            {chiste ? (
                <div style={{border: "solid 1px", padding: "5px"}}>
                    {chiste.value}
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}>
                            <button onClick={() => contador(setGusta, gusta)}>
                                👍🏻 {gusta}
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}>
                            {' '}
                            <button onClick={() => contador(setNoguta, noguta)}>
                                👎🏻 {noguta}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <button onClick={generateChiste()}>Generate chiste Random</button>
                </div>)}
        </div>
    )
}