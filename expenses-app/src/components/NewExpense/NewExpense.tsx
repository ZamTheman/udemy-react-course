import React, { useState } from 'react';
import './NewExpense.css';
import './ExpenseForm.css';
import ExpenseForm, { FormValues } from './ExpenseForm';
import { ExpenseData } from '../../Types/CommonExpeseTypes';

interface Props {
  expenseAdded: (expenseData: ExpenseData) => void;
}

const NewExpense: React.FC<Props> = ({expenseAdded}) => {
  const [displayAddExpense, setDisplayAddExpense] = useState<boolean>(false);
  
  const saveExpenseDataHandler = (enteredExpenseData: FormValues) => {
    const expenseData: ExpenseData = {
      Id: Math.random().toString(),
      Title: enteredExpenseData.Title,
      Amount: +enteredExpenseData.Amount,
      Date: new Date(enteredExpenseData.Date),
    };

    expenseAdded(expenseData);
    setDisplayAddExpense(false);
  };

  const cancelClickedHandler = () => {
    setDisplayAddExpense(false);
  };

  const addExpenseFormClicked = () => {
    setDisplayAddExpense(true);
  }

  return (
    <div className="new-expense">
      {displayAddExpense &&  <ExpenseForm
        onSubmitedData={saveExpenseDataHandler}
        onCancelClicked={cancelClickedHandler}
      />}
      {!displayAddExpense && <button onClick={addExpenseFormClicked}>Add new expense</button>}
    </div>
  );
};

export default NewExpense;
