import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { ExpenseData } from './Types/CommonExpeseTypes';

const InitialExpenses: ExpenseData[] = [
  {
    Id: 'e1',
    Title: 'Försäkring',
    Amount: 285,
    Date: new Date(2022, 4, 18),
  },
  {
    Id: 'e2',
    Title: 'Fotboll',
    Amount: 150,
    Date: new Date(2022, 3, 15),
  },
  {
    Id: 'e3',
    Title: 'Nice Cheeze',
    Amount: 92,
    Date: new Date(2021, 3, 15),
  }
];

const App: React.FC = () => {
  const [expensesValues, setExpenses] = useState<ExpenseData[]>(InitialExpenses);

  const addExpenseHandler = (expense: ExpenseData) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  }

  return (
    <div>
      <NewExpense expenseAdded={addExpenseHandler} />
      <Expenses expenses={expensesValues}/>
    </div>
  );
};

export default App;
