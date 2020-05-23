import React from 'react';
import ExpenseList from './ExpenseList'
import FilterExpenses from './FilterExpenses'

const Expenses = () => (
    <div>
        <FilterExpenses />
        <ExpenseList /> 
    </div>
)


export default Expenses