import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);
    const submitExpenseHandler = (enteredExpenseData) => {
        props.addNewExpense( {
            ...enteredExpenseData,
            id: Math.random().toString(),
        } );
    }
    const addingNewExpense = () => {
        setEditing(true);
    }
    const closingFormHandler = () => {
        setEditing(false);
    }

    return <div className = 'new-expense'>
        {!isEditing && <button onClick = {addingNewExpense}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSubmitExpense = {submitExpenseHandler} onCancel = {closingFormHandler}/>}
    </div>
}

export default NewExpense;