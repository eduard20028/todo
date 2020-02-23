import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import AddItem from '../AddItem';
import ItemStatusFilter from '../ItemStatusFilter';
import './app.css';



export default class App extends Component{

maxId = 100;

state = {
    todoData:[
        this.createTodoItem('Your todo list. It`s optional message, you can just delete it.')
    ],
    term: '',
    filter: 'all'
};

deleteItem = (id) => {
    this.setState(({todoData}) => {

    const idx = todoData.findIndex((el) => el.id === id);

    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];
        return {
          todoData: newArray
        };
    
    });
};

createTodoItem(label){
    return{
        label,
        important: false,
        done: false,
        hidden: true,
        id: this.maxId++
    }
}

addItem = (text) => {
const newItem = this.createTodoItem(text);

this.setState(({ todoData }) => {
    
    const newArr = [
        ...todoData, newItem
    ];

    return{
        todoData: newArr
    };
});
};

toggleProperty(arr, id, propname) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem,  [propname]: !oldItem[propname]}
  
        return [
            ...arr.slice(0, idx), 
            newItem, 
            ...arr.slice(idx+1)
        ];
}

onDone = (id) => {
    this.setState(({todoData}) => {
        return{
            todoData: this.toggleProperty(todoData, id, 'done')
        }
    });
};


onImportant = (id) => {
    this.setState(({todoData}) => {
        return{
            todoData: this.toggleProperty(todoData, id, 'important')
        }
    });
};

onSearchChange = (term) => {
    this.setState({term});
}
onFilter = (filter) => {
    this.setState({filter});
}

search(items, term){
    if (term.length === 0){
        return items;
    }

    return items.filter((item) => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
};

filter(items, filter){
  
    switch(filter){
        case 'active': return items.filter((item) => {
            return !item.done;
        });
        case 'done': return items.filter((item) => {
            return item.done;
        });
        case 'all': return items.filter((item) => {
            return items;
        });
        default: return items;
    }
   
}
   
render(){
    const {todoData, term, filter} = this.state;


    const visibleItems = this.filter(this.search(todoData,term), filter);


    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

return(
        <div className="main-div">
            <AppHeader
            todo={todoCount}
            done={doneCount}
            />
            <div className='todo-panel d-flex'>
                <SearchPanel
                onHidden={this.onHidden}
                onSearchChange={this.onSearchChange}
                hidden={this.hidden}
                />

                <ItemStatusFilter 
                filter={filter} 
                onFilter={this.onFilter}
                />
            </div>
            
            <TodoList 
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onImportant={this.onImportant}
            onDone={this.onDone}
            hidden={this.state.hidden}
            onHidden={this.onHidden}
            />

            <AddItem onItemAdded={this.addItem}/>
        </div>
    );
}
};
