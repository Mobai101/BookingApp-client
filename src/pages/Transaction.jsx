import React from "react";
import TransactionTable from "../components/transactions/TransactionTable";
import { redirect } from "react-router-dom";
import Container from "../UI/Container";

const Transaction = (props) => {
  return (
    <Container>
      <TransactionTable />
    </Container>
  );
};

export default Transaction;

export const transactionLoader = async () => {
  let myHeaders;
  const token = localStorage.getItem("token");

  if (!token) {
    return redirect("/login");
  }

  // prettier-ignore
  myHeaders = new Headers({
      'Authorization': token
    });

  try {
    const response = await fetch(`http://localhost:5000/transactions`, {
      headers: myHeaders,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
