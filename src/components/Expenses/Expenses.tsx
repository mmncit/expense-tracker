import * as React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Expense, ExpensesProps } from "./Expenses.types";

export const Expenses = ({ expenses }: ExpensesProps) => {
  return (
    <>
      {expenses.map((expense: Expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
        />
      ))}
    </>
  );
};
