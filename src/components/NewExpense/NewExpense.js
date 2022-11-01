import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [value, setValue] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setValue(false);
  };

  const setValueHandler = (e) => {
    setValue(true);
  };
  const stopValueHandler = () => {
    setValue(false);
  };

  // const NewExpenseButton = (props) => {
  //   return <ShowExpenseForm />;
  // };

  return (
    <div className="new__expense">
      {!value && <button onClick={setValueHandler}>Add Expense</button>}
      {value && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopValueHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
