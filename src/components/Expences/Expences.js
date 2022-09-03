import ExpenseItem from "./ExpenseItem";
import "./Expences.css";
import Card from "../UI/Card";

const Expences = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expence) => (
        <ExpenseItem
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expences;
