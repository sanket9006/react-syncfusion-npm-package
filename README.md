<br />

<div align="center">
<a href="https://react-hot-toast.com/"><img alt="react-hot-toast - Try it out" src="https://github.com/sanket9006/react-syncfusion-npm-package/blob/main/assets/Beige%20%26%20White%20Food%20Culinary%20Promotion%20Facebook%20Post.png"/></a>

</div>

<div align="center">
  <sub>Cooked by <a href="https://patilsanket.in/">Sanket Patil</a> 👨‍🍳</sub>
</div>
<br />

# Getting Started with Create React App + Syncfusion
To install react-syncfusion, use the following command.

With yarn 
```sh
yarn add react-syncfusion
```
With npm 

```sh
npm i react-syncfusion
```


# Getting Started

Add the components to your app. 


```sh
import React from 'react'
import { Table } from 'react-syncfusion'

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
   <Table columns={columns} rows={rows}></Table>
  )
}

export default App
```
