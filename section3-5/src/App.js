import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES=[
  {
    id: "e1",
    title: "alo1",
    amount: 13123,
    date: new Date(),
  },
  {
    id: "e2",
    title: "alo2",
    amount: 32323232,
    date: new Date(),
  },
  {
    id: "e3",
    title: "alo3",
    amount: 3434343,
    date: new Date(),
  },
  {
    id: "e4",
    title: "alo4",
    amount: 4545454,
    date: new Date(),
  },
  
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
