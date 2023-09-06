import React, { useEffect, useState } from 'react'
import Table from '../components/Table';
import './Users.css';


function Users() {
  const [tableData, setTableData] = useState([]);
  const tableColumns = ["#",'Username', 'Email', 'Location', 'Action'];

  useEffect(() => {
    fetch('http://localhost:3000/api/users/all')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Fetched data:', data);
      setTableData(data);
    })
    .catch((error) => console.error('Error fetching data:', error));
}, []);



  return (
    <div className='users'>
        <Table columns={tableColumns} data={tableData}/>
    </div>
  )
}

export default Users