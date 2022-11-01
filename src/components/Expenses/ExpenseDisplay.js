import React from "react";
import "./ExpenseDisplay.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const ExpenseDisplay = (props) => {
  const [selectedOption, setSelectedOption] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedOption(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedOption;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedOption}
          onFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseDisplay;
