import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Ukelele',
      amount: 3000,
      date: new Date(202, 8, 14),
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
      date: new Date(2021, 5, 28),
    },
    {
      id: 'e4',
      title: 'New Mouse',
      amount: 550,
      date: new Date(2021, 6, 12),
    },
  ];

  const addNewExpenseHandler = (newExpenseData) => {
    expenses.push(newExpenseData);
    console.log(expenses);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <hr></hr>
      <NewExpense addNewExpense = {addNewExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
