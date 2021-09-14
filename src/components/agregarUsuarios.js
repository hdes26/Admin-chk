import {  useState } from 'react'

import React from 'react'
import Paneladmin from './panelAdmin';
import ReactDOM from 'react-dom';

const AgregarUsuarios = () => {
    const divRoot = document.querySelector('#root');

    const [Key, setKey] = useState();
    const [Nombre, setNombre] = useState();
    const [Creditos, setCreditos] = useState();


    const regresar = () => {
        ReactDOM.render(<Paneladmin />, divRoot);
    }
    const registrarUsuario = async() => {
        const url = `https://chkjs.herokuapp.com/usuario/crear`;
        await fetch(url, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body:JSON.stringify({ usuario: [`${Key}`,`${Nombre}`,Creditos] })

        }).then((response) => {
            response.json()
                .then((data) => {
                    alert(data)
                })
        })
    }

    const handleKey = (event) =>{
        let mikey = event.target.value;
        setKey(mikey);
        
    }
    const handleNombre = (event) =>{
        let minombre = event.target.value;
        setNombre(minombre);
        
    }
    const handleCreditos = (event) =>{
        let miscreditos = parseInt(event.target.value);
        setCreditos(miscreditos)
        
    }

    return (

        <>
            <button className="regresar" onClick={regresar}>Regresar</button>


            <form className="formulario" action="" method="post" name="form">
                <input type="text" className="input-key" placeholder="Key" required id="key" onChange={handleKey}></input>
                <input type="text" className="input-user" placeholder="Nombre" required id="nombre" onChange={handleNombre}></input>
                <input type="number" className="input-creditos" placeholder="Creditos" required id="creditos" onChange={handleCreditos}></input>
                <input type="button" className="input-button" value="Crear usuario" onClick={registrarUsuario}></input>
            </form>



        </>

    );
}

export default AgregarUsuarios;
