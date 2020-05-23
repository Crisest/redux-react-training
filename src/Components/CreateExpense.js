import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux';
import {addExpense} from '../actions/expenses'

const CreateExpense =  (props) => (
    <div>
        <h3>Add new Expense</h3>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense({...expense}))
            props.history.push('/expenses')
        }}/>
    </div>
)


export default connect()(CreateExpense)