import * as React from "react";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";
import { ExpenseItemProps } from "./Expenses.types";

export const ExpenseItem = ({ date, title, amount }: ExpenseItemProps) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};
