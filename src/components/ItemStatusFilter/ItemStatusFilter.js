import React, {Component} from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component  {
    
    state = {
        filter: ''
    };
    
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    
    render(){
        const {filter, onFilter} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info': 'btn-outline-secondary';
                return (
                    <button type="button" className={`btn ${clazz}`} onClick={() => {onFilter(name)}} key={name}>{label}</button>
                )
        });
    return (

    <div id='btn_group' className="btn-group btn" role="group" aria-label="Basic example">
            {buttons}
    </div>
    )
}
}

