import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import ExpenseDetails from '../components/ExpenseDetails'
import Expenses from '../components/Expenses'
import Account from '../components/Account'
import CreateExpense from '../components/CreateExpense'
import EditExpensePage from '../components/EditExpensePage'
import NotFound from '../components/NotFound';

const AppRouter =  () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>       
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/expenses" component={Expenses} exact={true}/>
                <Route path="/addexpense" component={CreateExpense}/>
                <Route path="/account" component={Account}/>
                <Route path="/expenses/:id" component={EditExpensePage}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter