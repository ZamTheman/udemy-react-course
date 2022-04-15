import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense, { SubmitFormValues } from './components/NewExpense/NexExpense';

type ExpenseData = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

const App: React.FC = () => {
  const expenses: ExpenseData[] = [
    {
      id: 'e1',
      title: 'Försäkring',
      amount: 285,
      date: new Date(2022, 4, 18),
    },
    {
      id: 'e2',
      title: 'Fotboll',
      amount: 150,
      date: new Date(2022, 3, 15),
    },
  ];

  const addExpenseHandler = (expense: SubmitFormValues) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense expenseAdded={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
};

export default App;
