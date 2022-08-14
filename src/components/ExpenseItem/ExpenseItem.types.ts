export interface ExpenseDateProps {
  date: Date;
}

export interface ExpenseItemProps extends ExpenseDateProps {
  key: string;
  title: string;
  amount: number;
}
