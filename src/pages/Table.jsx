import React, {useState, useEffect} from 'react';
import axios from 'axios';

import TableComponent from '../custom components/tableComponent';

const Table = () => {
  const [data, setData] = useState();
  const API = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';
  
  useEffect(async () => {
    try{
      const res = await axios(API);
      console.log('data: '+ JSON.stringify(res.data))
      
      setData(res.data.results)

    }catch(error){
      console.log("error", error)
    }
  },[]);

  return (
    <>
      <p>Aqui van los datos de la tabla.</p>
      <p>Endpoint: {API}</p>
      {
        data ? <TableComponent data={data}></TableComponent> : <p> No hay data para mostrar</p>
      }
    </>
  )
}

export default Table;