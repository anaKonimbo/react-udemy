import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expences.css";
import Card from "../UI/Card";

const Expences = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((expence) => (
        <ExpenseItem
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expences;
