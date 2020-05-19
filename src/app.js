import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import {sortByAmount , sortByDate, setTextFilter} from './actions/filters'
import getFilteredExpenses from './selectors/expenses'
import configStore from './store/configStore'
import AppRouter from './router/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configStore()

const expenseOne = store.dispatch(addExpense({description: 'Computer', amount: 100000}))
store.dispatch(addExpense({description: 'Water', amount: 400, createdAt: 1000}))
store.dispatch(editExpense(expenseOne.expense.id, {descriptionL: 'Laptop' ,createdAt: -1000}))
// store.dispatch(setTextFilter('comp'))
store.dispatch(sortByDate())
const state = store.getState()

const VisibleExpenses = getFilteredExpenses(state.expenses, state.filters)
console.log(VisibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))
