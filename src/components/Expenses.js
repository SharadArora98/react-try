import React, {useState} from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

function Expenses (props) {
    const [filterValue, setFilterValue] = useState('2020');

    const yearFilterHandler = (yearValue) => {
        setFilterValue(yearValue);
    };

    let elements = [];
    const filterYearExpenses = [];
    for (let i = 0; i < props.items.length; i += 1) {
        if (filterValue === props.items[i].date.getFullYear().toString()) {
            elements.push(
                <ExpenseItem key = {props.items[i].id} expense={props.items[i]} />
            )
            filterYearExpenses.push(props.items[i]);
        }
    }
    if (elements.length === 0) {
        elements = <p>No Entry Found. SAVINGS !!!</p>
    }
    return <div className="expenses">
            <ExpenseFilter selectedYear = {filterValue} onFilterChange = {yearFilterHandler} />
            <ExpensesChart data = {filterYearExpenses} />
            {elements}
        </div>
}

export default Expenses;