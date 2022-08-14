import * as React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Expense, ExpensesProps } from "./Expenses.types";
import "./Expenses.css";

export const Expenses = ({ expenses }: ExpensesProps) => {
  return (
    <div className="expenses">
      {expenses.map(({ id, date, amount, title }: Expense) => (
        <ExpenseItem key={id} date={date} amount={amount} title={title} />
      ))}
    </div>
  );
};
