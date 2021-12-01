import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [EnteredTitle, setTtitle] = useState('');
    const [EnteredAmount, setAmount] = useState('');
    const [EnteredDate, setDate] = useState('');

    const onTiltleChangeHandler = (event) => {
        setTtitle(event.target.value);
    };
    const onAmountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const onDateChangeHandler = (event) => {
        setDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredExpenseData = {
            title : EnteredTitle,
            amount : EnteredAmount,
            date : new Date(EnteredDate),
        };
        setTtitle('');
        setAmount('');
        setDate('');
        props.onSubmitExpense(enteredExpenseData);
    };

    return <form onSubmit = {submitHandler}>
        <div className = 'expense_controls'>
            <div className = 'expense_control'>
                <label>Title</label>
                <input type = 'text' value = {EnteredTitle} onChange = {onTiltleChangeHandler} />
            </div>
            <div className = 'expense_control'>
                <label>Amount</label>
                <input type = 'number' value = {EnteredAmount} min = '0.01' step = '0.01' onChange = {onAmountChangeHandler} />
            </div>
            <div className = 'expense_control'>
                <label>Date</label>
                <input type = 'date' min = '2019-01-01' max = '2020-12-31' value = {EnteredDate} onChange = {onDateChangeHandler} ></input>
            </div>
            <div className = 'expense_action'>
                <button type = "submit">ADD EXPENSE</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;