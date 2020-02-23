import React, {Component} from 'react';
import './TodoListItem.css';

export default class TodolistItem extends Component{

     
    render(){
        const {label, onDeleted, 
            onImportant, onDone,
            important, done
        } = this.props;
       
        let classNames = 'todo-list-item';
       
        if (done){
            classNames += ' done';
        }
        if (important){
            classNames += ' important';
        }

        return (
            <span className = {classNames}>
                <span
                 className = "todo-list-item-label"
                 onClick = {onDone}>
            {label}
                </span>
                <div className = 'btn_func d-inline-flex align-items-center'>           
                        <button type = 'button' className = 'btn btn-outline-danger btn-md' onClick = {onDeleted}>
                            <i className = "fa fa-trash-o"></i>
                        </button>

                        <button type = 'button' className = "btn btn-outline-success btn-md" onClick = {onImportant}>
                            <i className="fa fa-exclamation"></i>
                        </button>
                </div>
    
            </span>
                );
    };
}


