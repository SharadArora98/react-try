import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const submitExpenseHandler = (enteredExpenseData) => {
        props.addNewExpense( {
            ...enteredExpenseData,
            id: Math.random().toString(),
        } );
    }

    return <div className = 'new-expense'>
        <ExpenseForm onSubmitExpense = {submitExpenseHandler}/>
    </div>
}

export default NewExpense;