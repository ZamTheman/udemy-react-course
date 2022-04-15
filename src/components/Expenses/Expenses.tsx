import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

interface ExpenseData {
  date: Date;
  title: string;
  amount: number;
}

interface Prop {
  expenses: ExpenseData[];
}

const Expenses: React.FC<Prop> = ({ expenses }) => {
  const [currentYearValue, setCurrentYear] = useState<number>(2020);
  const yearChangeHandler = (year: number) => {
    setCurrentYear(year);
    console.log(currentYearValue);
  }
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={currentYearValue} onYearChangedEvent={yearChangeHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
