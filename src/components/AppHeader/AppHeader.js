import React from 'react';
import './AppHeader.css';

const AppHeader = ({done, todo}) => {
    return (
        <div className='app-header'>
    <h1>Todo List</h1>
    <p className='alert alert-dark'>{todo} more to {done} done</p>
        </div>
    );
};

export default AppHeader;
