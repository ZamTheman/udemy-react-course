import React from 'react';
import './NewExpense.css';
import ExpenseForm, { FormValues } from './ExpenseForm';

export interface SubmitFormValues {
  Id: string;
  Title: string;
  Amount: number;
  Date: Date;
}

interface Props {
  expenseAdded: (expenseData: SubmitFormValues) => void;
}

const NewExpense: React.FC<Props> = ({expenseAdded}) => {
  const saveExpenseDataHandler = (enteredExpenseData: FormValues) => {
    const expenseData: SubmitFormValues = {
      Id: Math.random().toString(),
      Title: enteredExpenseData.Title,
      Amount: +enteredExpenseData.Amount,
      Date: new Date(enteredExpenseData.Date)
    };

    expenseAdded(expenseData);
  }
  
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitedData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
