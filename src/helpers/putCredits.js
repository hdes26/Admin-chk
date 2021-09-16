export const putCredits = async (llave,setcreditos,credits) => {
    setcreditos(credits+50);
    const url = `https://chkjs.herokuapp.com/creditos/agregar/${llave}`;
    const resp = await fetch(url,{
        method: 'PUT',
        headers: { "Content-type": "application/json" },
        body:JSON.stringify({creditos:credits+50})
    });
    const  data  = await resp.json();
    console.log(data)
    return data;
}


