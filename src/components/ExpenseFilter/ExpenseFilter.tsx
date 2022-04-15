import React from 'react';
import './ExpenseFilter.css';

interface Props {
    onYearChangedEvent: (year: number) => void;
    selectedYear: number;
}

const ExpenseFilter: React.FC<Props> = ({selectedYear, onYearChangedEvent}) => {
  const yearChangedHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onYearChangedEvent(+event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear.toString()} onChange={yearChangedHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
