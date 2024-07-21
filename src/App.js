import React from 'react';
import ListComponent from './ListComponent';

export const initialItems = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
const App = () => {

    return (
        <div>
            <h1>Список объектов</h1>
            <ListComponent initialItems={initialItems} />
        </div>
    );
};

export default App;
