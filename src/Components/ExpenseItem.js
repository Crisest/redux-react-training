import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';
const ExpenseItem = ({description, amount, createdAt, id}) => (
    <div>
        <h3><Link to={`expenses/${id}`}>{description}</Link></h3>
        <p>${(amount / 100).toFixed(2)}</p>
        <p>{moment(createdAt).format('MMMM Do YYYY')}</p>
    </div>
)

export default ExpenseItem