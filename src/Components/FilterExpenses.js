import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters' 


class FilterExpenses extends React.Component {

    render(){
        return(
            <div>
                <input type="text" 
                    placeholder="Search" 
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                    />
                    
                <select name="sortBy" 
                    value={this.props.sortBy}
                    onChange={
                        (e) => {
                            if ( e.target.value === 'date'){
                                this.props.dispatch(sortByDate())
                            }
                            else if ( e.target.value === 'amount'){
                                this.props.dispatch(sortByAmount())
                            }
                        }
                    }
                    >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(FilterExpenses)