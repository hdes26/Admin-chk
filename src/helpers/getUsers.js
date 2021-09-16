export const getUsers = async () => {
    const url = `https://chkjs.herokuapp.com/usuario/`;
    const resp = await fetch(url);
    const  data  = await resp.json();
    const infos = data.map(info => {
        return {
            llave: info[0],
            user: info[1],
            creditos: info[2]
        }
    })
    return infos;
}