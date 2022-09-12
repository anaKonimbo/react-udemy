import { useState } from "react";
import Expences from "./components/Expences/Expences";
import NewExpense from "./components/NewExpence/NewExpense";

const App = () => {
  const DUMMY_EXPENCES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expences, setExpences] = useState(DUMMY_EXPENCES);


  const addExpenseHandler = (expense) => {
    console.log(expences);
    setExpences((prevExpense) => {
      return [...prevExpense, expense];
    })
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expences expenses={expences} />
    </div>
  );
};

export default App;
