import React from 'react';
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        if(props.expense){console.log(props);}
        else{console.log("no expense");}
        this.state = {    
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            error: '',
            focused: false  
        }
    
    }
    OnSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: "Please Enter Description and amount"}))
        }
        else{
            this.setState(() => ({error: ""}))
            this.props.onSubmit({
                description: this.state.description,
                amount: (this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf()

            })
        }
    }

    onTextChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description  }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if(amount.match(/^\d{1,}(\.\d{0,2})?$/) || !amount){
            this.setState(() => ({amount}))
        }
        
    }

    render(){
        return (
            <div>
                <form id="form" onSubmit={this.OnSubmit}>

                    <input type='text' placeholder='Description'
                        value={this.state.description} 
                        onChange={this.onTextChange} />

                    <input type='text' placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                     />
                     <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={createdAt => this.setState({ createdAt })} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                        id="your_unique_id" // PropTypes.string.isRequired,
                    />

                    <button>Submit</button>

                </form>
            </div>
        )
    }
}
