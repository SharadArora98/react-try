import React, {useState} from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses (props) {
    const [filterValue, setFilterValue] = useState('2020');

    const yearFilterHandler = (yearValue) => {
        setFilterValue(yearValue);
    };

    const elements = [];
    for (let i = 0; i < props.items.length; i += 1) {
        elements.push(
            <ExpenseItem expense={props.items[i]} />
        )
    }
    return <div className="expenses">
            <ExpenseFilter selectedYear = {filterValue} onFilterChange = {yearFilterHandler} />
            {elements}
        </div>
}

export default Expenses;