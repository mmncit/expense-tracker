import * as React from "react";
import "./ExpenseForm.css";
import { ExpenseFormProps } from "./Expenses.types";

export const ExpenseForm = ({
  onCancel,
  onSaveExpenseData,
}: ExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = React.useState("");
  const [enteredAmount, setEnteredAmount] = React.useState("");
  const [enteredDate, setEnteredDate] = React.useState("");

  const handleTitleClick = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(value);

    // setUserInput(()=>{
    //   return {...userInput,enteredTitle: event.target.value}
    // })
  };

  const handleAmountClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
    // setUserInput(()=>{
    //   return {...userInput,enteredAmount: event.target.value}
    // })
  };

  const handleDateClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
    // setUserInput(()=>{
    //   return {...userInput,enteredDate: event.target.value}
    // })
  };

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
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
            max="2022-12-31"
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
