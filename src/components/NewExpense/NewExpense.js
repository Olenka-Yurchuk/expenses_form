import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [isFormClose, setIsFormClose] = useState(true);

  const toggleFormVisibility = (event) => {
    setIsFormClose((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="new-expense">
      {isFormClose ? (
        <button type="button" onClick={toggleFormVisibility}>
          Add Expense
        </button>
      ) : (
        <ExpenseForm
          onToggleFormVisibility={toggleFormVisibility}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
