import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {createStore, combineReducers} from 'redux'
import Dashboard from './Components/Dashboard'
import Header from './Components/Header'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import uuid from 'react-uuid'




const addExpense = (
    {
        description = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        amount,
        createdAt
    }
})

const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_START_DATE',
    endDate
})

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense
                }
            })
        default:
            return state
    }W
}

const filtersReducerDefault = {
    sortBy: 'date',
    text: '',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefault, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }    
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))


store.subscribe(() =>{
    console.log(store.getState());
})
const expenseOne = store.dispatch(addExpense({description: 'Computer', amount: 100000}))
store.dispatch(addExpense({description: 'Water', amount: 400}))
store.dispatch(editExpense(expenseOne.expense.id, {descriptionL: 'Laptop' ,createAt: 1000}))
store.dispatch(removeExpense({id: expenseOne.expense.id}))
store.dispatch(sortByAmount())




ReactDOM.render('This is my component', document.getElementById('app'))
