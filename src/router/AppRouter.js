import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import ExpenseDetails from '../components/ExpenseDetails'
import Account from '../components/Account'

const AppRouter =  () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>       
                <Route path="/"component={Dashboard} exact={true} />
                <Route path="/details" component={ExpenseDetails}  />
                <Route path="/account" component={Account}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter