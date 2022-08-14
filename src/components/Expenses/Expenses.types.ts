export interface ExpenseDateProps {
  date: Date;
}

export interface ExpenseItemProps extends ExpenseDateProps {
  key: string;
  title: string;
  amount: number;
}

export interface Expense extends Omit<ExpenseItemProps, "key"> {
  id: string;
}

export interface ExpensesProps {
  expenses: Expense[];
}
