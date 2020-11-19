import React, {useState, useEffect,Fragment} from 'react';
 import Table from './Table/Table';
export const TableContext = React.createContext();
const TableData = () =>{
  const [data, setData] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      const request = await fetch('./contacts.json');
      const response = await request.json();
      setData(response);
    }
    getData();
  },[])
  return(
    <Fragment>
      <TableContext.Provider value = {data}>
        <Table/>
      </TableContext.Provider>
    </Fragment>
  )
}
export default TableData;
