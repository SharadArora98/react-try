import React, {useState} from 'react';

import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
    {
      id: 'e1',
      title: 'Ukelele',
      amount: 3000,
      date: new Date(2020, 8, 14),
    },
    {  
      id: 'e2',
      title: 'Grocery',
      amount: 700,
      date: new Date(2021, 9, 12) },
    {
      id: 'e3',
      title: 'Clothes',
      amount: 2851,
      date: new Date(2019, 5, 28),
    },
    {
      id: 'e4',
      title: 'New Mouse',
      amount: 550,
      date: new Date(2021, 6, 12),
    },
  ];

function App() {
  const [expenses,setExpenses] = useState(DUMMY_DATA);

  const addNewExpenseHandler = (newExpenseData) => {
    setExpenses((prevState) => {
      return [...prevState,newExpenseData];
    })
  };

  return (
    <div className="App">
      <h1>SMART EXPENSE TRACKER</h1>
      <p>Get savings done right. </p>
      <NewExpense addNewExpense = {addNewExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
