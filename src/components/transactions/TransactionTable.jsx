import React from "react";
import classes from "./TransactionTable.module.css";
import { useLoaderData } from "react-router-dom";

const TransactionTable = (props) => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return (
    <>
      <h1>Your Transactions</h1>
      <table className={classes.transactionTable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Hotel</th>
            <th>Room</th>
            <th>Date</th>
            <th>Price</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loaderData.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <b>{item.hotel.name}</b>
                </td>
                <td>{item.roomNo.join(", ")}</td>
                <td>{`${new Date(item.dateStart).toLocaleDateString(
                  "en-GB"
                )} - ${new Date(item.dateEnd).toLocaleDateString(
                  "en-GB"
                )}`}</td>
                <td>{`$${item.price}`}</td>
                <td>{item.payment}</td>
                <td>
                  <span className={classes[item.status]}>{item.status}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionTable;
