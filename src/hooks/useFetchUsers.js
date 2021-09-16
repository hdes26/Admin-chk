import { useState, useEffect } from "react";
import { getUsers } from "../helpers/getUsers";



export const UserFetchUsers = (estado) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        getUsers()
            .then(infos => {
                setState({
                    data: infos,
                    loading: false
                });
            } )
    }, [estado])
    return state;
}
