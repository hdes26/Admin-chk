import React, { useState } from 'react'
import { putCredits } from '../helpers/putCredits';




export const GifGridUser = ({ llave, user, credits}) => {
    const [creditos, setcreditos] = useState(credits);
    

    console.log(user, credits);
    
    const CambiarCreditos = () => {
        putCredits(llave , setcreditos,parseInt(creditos))

    }



    return (
        <>
            <div className="card animate__animated animate__fadeIn" onClick={CambiarCreditos} >
                <p> {user}  credits :   {creditos} </p>
            </div>
        </>
    )
}
