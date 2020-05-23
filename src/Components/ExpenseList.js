import React from 'react';
import { connect } from 'react-redux';
import selectedExpenses from '../selectors/expenses'
import ExpenseItem from './ExpenseItem';
import { Link } from 'react-router-dom';

const Expenses = (props) => (
    <div>
        <h1>Expenses</h1>
        <Link to="/addexpense">Add new</Link>
        {props.expenses.map((expense) => {
            return <ExpenseItem key={expense.id} {...expense}/>
        })}
             
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
    
}


export default connect(mapStateToProps)(Expenses)