import React, { useState, ChangeEvent, FormEvent } from 'react';
import './ExpenseForm.css';

export interface FormValues {
  Title: string;
  Amount: string;
  Date: string;
}

interface Props {
  onSubmitedData: (enteredExpenseData: FormValues) => void;
  onCancelClicked: () => void;
}

const initValues: FormValues = {
  Title: '',
  Amount: '',
  Date: '',
};

const ExpenseForm: React.FC<Props> = ({
  onSubmitedData,
  onCancelClicked
}) => {
  const [formValues, setFormValues] = useState<FormValues>(initValues);
  const onChangeHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setFormValues((prevValues: FormValues) => {
      switch (target.type) {
        case 'text':
          return { ...prevValues, Title: target.value };
        case 'number':
          return { ...prevValues, Amount: target.value };
        case 'date':
          return { ...prevValues, Date: target.value };
      }

      return { ...prevValues };
    });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    onSubmitedData(formValues);
    setFormValues(initValues);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formValues.Title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={formValues.Amount}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={formValues.Date}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancelClicked}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
