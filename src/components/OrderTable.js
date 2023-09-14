
import React from "react";
import "./Table.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import { Link } from "react-router-dom";

const OrderTable = ({ columns, data }) => {
  return (
    <table className="table">
      <thead>
        <tr className="tablerow">
          {columns.map((column, index) => (
            <th className="tablehead" key={index}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className="limit-text">{rowIndex + 1}</td>
            <td className="limit-text">{row.userId}</td>
            <td className="limit-text">{row.customerId}</td>
            <td className="limit-text">{row.payment_status}</td>
            <td>{row.total}</td>
            <td className="limit-text">{row.createdAt}</td>
            <td>
              <div className="icons">
                <FcIcons.FcViewDetails className="view" />
                <Link to={`/EditUser/${row._id}`}>
                <FaIcons.FaEdit className="edit" />
                </Link>
                <AiIcons.AiFillDelete className="delete" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
