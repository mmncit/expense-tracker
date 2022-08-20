import * as React from "react";
import { ExpenseForm } from "./ExpenseForm";
import { Expense, NewExpenseProps } from "./Expenses.types";
import "./NewExpense.css";

export const NewExpenses = ({ onAddExpense }: NewExpenseProps) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
