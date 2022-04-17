import React from 'react';
import { ExpenseData } from '../../Types/CommonExpeseTypes';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

interface Props {
  Expenses: ExpenseData[];
}

const ExpensesList: React.FC<Props> = ({ Expenses }) => {
  if (Expenses.length === 0)
    return (
      <h2 className="expenses-list__fallback">Found no expenses.</h2>
    );

  return (
    <ul className="expenses-list">
      {Expenses.map((e) => (
        <ExpenseItem
          key={e.Id}
          title={e.Title}
          amount={e.Amount}
          date={e.Date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
