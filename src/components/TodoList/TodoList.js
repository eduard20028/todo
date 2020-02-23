import React, {Component} from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

export default class Todolist extends Component{
        

    render(){
        const {todos, onDeleted, 
            onImportant, onDone} = this.props;

        let classNames = 'list-group-item';
        
        

        
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;

       
        return(
            <li className={classNames} key={item.id}>
                <TodoListItem {...itemProps} 
            
                onDeleted = {() => onDeleted(id)}
                onImportant = {() => onImportant(id)}
                onDone = {() => onDone(id)}
                    
                />
            </li>
        );
        });

    return(
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
    }
};

