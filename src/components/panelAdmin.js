import React from 'react'
import Aggusuarios from './agregarUsuarios';
import Aggcreditos from './agregarCreditos';
import ReactDOM from 'react-dom';

const panelAdmin = () => {
    const divRoot = document.querySelector('#root');

    const agregarUsuarios = () => {
        ReactDOM.render(<Aggusuarios/>, divRoot);
    }
    
    const eliminarUsuarios = () => {

    }
    const agregarCreditos = () => {
        ReactDOM.render(<Aggcreditos/>, divRoot);
    }
    




    return (
        <>
            <div className="panel">
                <div id="agguser" onClick={agregarUsuarios}>
                    Agregar usuarios
                </div>
                <div id="deleteuser" onClick={eliminarUsuarios}>
                    Eliminar usuarios
                </div>
                <div id="aggcredits" onClick={agregarCreditos}>
                    Agregar Creditos
                </div>



            </div>
        </>

    );
}

export default panelAdmin;
