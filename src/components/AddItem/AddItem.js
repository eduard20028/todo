import React, {Component} from 'react';
import './AddItem.css';

export default class AddItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        });
    };

    render(){

        return(
            <form className = 'add-item-form' onSubmit ={this.onSubmit}>
                <p className = 'ad_it'><span>Add Item</span></p>
                <input 
                type="text" 
                className='form-control' 
                onChange={this.onLabelChange}
                placeholder='What needs to be done'
                value={this.state.label}
                />
                <button 
                type='button' 
                className='btn btn-outline-info btn-md' 
                onClick={this.onSubmit}>
                    <i className="fa fa-plus"></i>
                </button>
            </form>
        )
    }
}