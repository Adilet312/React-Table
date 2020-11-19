import React, {useState, useEffect, useContext, useMemo, Fragment} from 'react';
import {TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti';
import { useTable,useSortBy } from 'react-table';
import {COLUMNS} from '../Columns/Columns';
import {TableContext} from '../TableData';
import './Table.css';

const Table = () => {
  const data = useContext(TableContext);
  const columns = useMemo(()=> COLUMNS,[]);
  const tableInstance = useTable({
    columns: columns,
    data: data
  },useSortBy)
const { getTableProps, getTableBodyProps, headerGroups,footerGroups, rows, prepareRow} = tableInstance;
console.log(rows[0]);
  return(
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map( headerGroup =>(
            <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span> {column.isSorted ? (column.isSortedDesc ? <TiArrowSortedDown/>:<TiArrowSortedUp/>):''}</span>
                </th>
            ))}
            </tr>
        ))}

      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map( row =>{
            prepareRow(row)
            return(
              <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })
                }
              </tr>
            )
          })
        }

      </tbody>
      <tfoot>
      {
        footerGroups.map( footerGroup => (
          <tr {...footerGroup.getFooterGroupProps()}>
          {
            footerGroup.headers.map( column =>(
              <td {...column.getFooterProps}>
              {
                column.render('Footer')
              }
              </td>
            ))
          }
          </tr>
        ))
      }
      </tfoot>
    </table>
  )
}
export default Table;
