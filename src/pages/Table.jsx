import React, {useState, useEffect} from 'react';
import axios from 'axios';

import TableComponent from '../custom components/tableComponent';
import Pagination from '../custom components/paginationComponent';

const Table = () => {
  const [data, setData] = useState();
  const [currentPage,setCurrentPage] = useState(1);
  const API = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';
  
  useEffect(async () => {
    try{
      const res = await axios(API);
      const firstPageIndex = (currentPage - 1) * 10;
      const lastPageIndex = firstPageIndex + 10;
      //console.log('data: '+ JSON.stringify(res.data))
      setData(res.data.results.slice(firstPageIndex, lastPageIndex))

    }catch(error){
      console.log("error", error)
    }
  },[currentPage]);

  return (
    <>
      <p>Aqui van los datos de la tabla.</p>
      <p>Endpoint: {API}</p>
      <p>{currentPage}</p>
      {
        data ? <> 
          <TableComponent data={data}/> 
          <Pagination
            currentPage={currentPage}
            onPageChange={page => page === 0 ? setCurrentPage(1) : setCurrentPage(page)}
          />
        </>  : <p> No hay data para mostrar</p>
      }
    </>
  )
}

export default Table;