//import {  useState} from 'react'
import React from 'react'
import Paneladmin from './panelAdmin';
import ReactDOM from 'react-dom';
import { UserFetchUsers } from '../hooks/useFetchUsers';
import { GifGridUser } from './UserGridAggCredits';


const AgregarCreditos = () => {
    const divRoot = document.querySelector('#root');


    const { data: users, loading } = UserFetchUsers();

    const regresar = () => {
        ReactDOM.render(<Paneladmin />, divRoot);
    }

    return (

        <>
            <img id="regresar" src="https://img.icons8.com/ios/50/000000/close-window.png" alt="regresar" onClick={regresar} />

            <h1>Agregar creditos</h1>
            {loading ? <p className="animate__animated animate__flash">Loading...</p> : null}

            <div className="grid">
                {
                    users.map(user => (
                        <GifGridUser
                            key={user.user}
                            user={user.user}
                            credits={user.creditos}
                            llave={user.llave}


                        />
                    ))
                }
            </div>



        </>

    );
}

export default AgregarCreditos;
