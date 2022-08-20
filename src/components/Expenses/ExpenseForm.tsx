import * as React from "react";
import "./ExpenseForm.css";
import { ExpenseFormProps } from "./Expenses.types";

export const ExpenseForm = ({
  onCancel,
  onSaveExpenseData,
}: ExpenseFormProps) => {
  const [userInput, setUserInput] = React.useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const handleTitleClick = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: value };
    });
  };

  const handleAmountClick = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: value };
    });
  };

  const handleDateClick = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: value };
    });
  };
  const { enteredTitle, enteredAmount, enteredDate } = userInput;
  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={handleTitleClick} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleAmountClick}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2100-12-31"
            value={enteredDate}
            onChange={handleDateClick}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
