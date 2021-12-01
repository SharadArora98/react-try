import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
function ExpenseItem(props) {
    const [title, setTtitle] = useState(props.expense.title);

    const onClickHandler = () => {
        setTtitle("Updating");
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.expense.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
            <button onClick = {onClickHandler}>Update Title</button>
            <hr></hr>
        </div>
    );
}

export default ExpenseItem;