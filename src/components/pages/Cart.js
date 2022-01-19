import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const ALL_EXPENSES = [
  { id: 1, name: "Item 1", amount: 20 },
  { id: 2, name: "Item 2", amount: 5 },
];

function Cart() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleName = (event) => {
    console.log("Name ", event.target.value);
    setName(event.target.value);
  };

  const handleAmount = (event) => {
    console.log("Amount ", event.target.value);
    setAmount(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    //check whether the name is not empty and the amount is not negative
    if (name !== "" && amount > 0) {
      // single expense object
      const expense = { name, amount };
      // do not override previous values in the array
      // use spread operator to access previous values
      setExpenses([...expenses, expense]);

      // clean input fields
      setName("");
      setAmount("");
    } else {
      console.log("Invalid expense name or the amount");
    }
  };

  const handleClearExpenses = () => {
    setExpenses((expenses) => {
      const temp = [...expenses]
      temp.pop()

      return temp;
    })
  };

  return (
    <div>
      <div
        className="card shadow"
      >
        <div className="card-body">
          <div className="card-title">Payment Details</div>
          <List
            style={{ border: "none !important", outline: "none !important" }}
            expenses={expenses}
          />
          <Form
            name={name}
            amount={amount}
            handleName={handleName}
            handleAmount={handleAmount}
            handleSubmitForm={handleSubmitForm}
            handleClearExpenses={handleClearExpenses}
          />
          <p>
            Total Expense:{" "}
            <span className="text-success">
              ${" "}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount));
              }, 0)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
