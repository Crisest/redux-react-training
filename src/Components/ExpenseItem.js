import React from 'react';
import moment from 'moment'
const ExpenseItem = ({description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>${amount / 100}</p>
        <p>{createdAt}</p>
    </div>
)

export default ExpenseItem