import React from 'react'; 
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { editExpense ,removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => (
    <div>
        <h3>Edit </h3>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.match.params.id, expense))
                props.history.push('/expenses')
            }}           
        />
        <button onClick={
            () => {
                props.dispatch(removeExpense({id: props.match.params.id}))
                props.history.push('/expenses')
            }
        }>
            Remove
        </button>
        
    </div>
)

const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
        
    }
}

export default connect(mapStatetoProps)(EditExpensePage)