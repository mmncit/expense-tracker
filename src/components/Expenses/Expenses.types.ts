export interface ExpenseDateProps {
  date: Date;
}

export interface ExpenseItemProps extends ExpenseDateProps {
  key?: string;
  title: string;
  amount: number;
}

export interface Expense extends Omit<ExpenseItemProps, "key"> {
  id: string;
}

export interface ExpensesProps {
  expenses: Expense[];
}

export interface NewExpenseProps {
  onAddExpense: (expenseData: Expense) => void;
}

export interface ExpenseFormProps {
  onSaveExpenseData: (expenseData: ExpenseItemProps) => void;
  onCancel: () => void;
}
