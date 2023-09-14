import React, { useEffect, useState } from 'react'
import OrderTable from '../components/OrderTable';
import './Users.css';


function Orders() {
  const [tableData, setTableData] = useState([]);
  const tableColumns = ["#",'User Id', 'Customer Id', 'Payment Status', 'Amount', 'Date', 'Action'];

  useEffect(() => {
    fetch('http://localhost:3000/api/orders/all')
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
        <OrderTable columns={tableColumns} data={tableData}/>
    </div>
  )
}

export default Orders;