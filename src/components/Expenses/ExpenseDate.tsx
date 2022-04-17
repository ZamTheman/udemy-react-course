import React from 'react';
import './ExpenseDate.css';

interface Props {
  date: Date;
}

const ExpenseDate: React.FC<Props> = ({ date }) => {
  const month = date.toLocaleString('sv-SE', { month: 'long' });
  const day = date.toLocaleString('sv-SE', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
