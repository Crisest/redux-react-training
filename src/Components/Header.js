import React from 'react';
import {NavLink }from 'react-router-dom'

const Header = () => (
    <div>
        <h1>EasyPocket</h1>
        <NavLink to="/" exact={true}  activeClassName="is-active"> Home</NavLink>
        <NavLink to="/account"  activeClassName="is-active"> Account</NavLink>
        <NavLink to="/details"  activeClassName="is-active"> Expense</NavLink>
    </div>
    

)

export default Header