import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses (props) {
    const elements = [];
    for (let i = 0; i < props.items.length; i += 1) {
        elements.push(
            <ExpenseItem expense={props.items[i]} />
        )
    }
    return <div className="expenses">{elements}</div>
}

export default Expenses;