import React, { useState } from 'react';
import { ExpenseData } from '../../Types/CommonExpeseTypes';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

interface Prop {
  expenses: ExpenseData[];
}

const Expenses: React.FC<Prop> = ({ expenses }) => {
  const [currentYearValue, setCurrentYear] = useState<number>(2020);
  const yearChangeHandler = (year: number) => {
    setCurrentYear(year);
  };

  const filteredList = expenses.filter(
    (e) => e.Date.getFullYear() === currentYearValue
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={currentYearValue}
        onYearChangedEvent={yearChangeHandler}
      />
      <ExpensesChart expenses={filteredList} />
      <ExpensesList Expenses={filteredList} />
    </Card>
  );
};

export default Expenses;
