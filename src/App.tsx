import React from 'react';
import Expenses from './components/Expenses/Expenses';

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
};

export default App;
