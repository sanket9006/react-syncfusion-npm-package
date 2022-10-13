import React from 'react'
import { Table } from './lib'

const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  {
      field: 'firstName',
      headerName: 'First name',
      width: 100,
      editable: true,
      textAlign: 'Left',
  },
  {
      field: 'lastName',
      headerName: 'Last name',
      width: 100,
      editable: true,
      textAlign: 'Left',
  },
  {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
      editable: true,
      textAlign: 'Left',
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const App = () => {
  return (
    <div><Table columns={columns} rows={rows}></Table></div>
  )
}

export default App