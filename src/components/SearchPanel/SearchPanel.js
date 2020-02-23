import React, {Component} from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component{
    

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render(){
    return (

    <div className='search-panel'> 
        <input className='form-control' placeholder='Print to search' onChange={this.onSearchChange}/>
    </div>

    );

    };
};
