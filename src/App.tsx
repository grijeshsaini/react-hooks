import React from 'react';
import {ExampleUseEffect} from './Hooks/ExampleUseEffect';
import {ExampleUseReducer} from './Hooks/ExampleUseReducer';
import {ExampleUseState} from './Hooks/ExampleUseState';


function App() {
    return (
        <div className="App">
            <h1>Use State.......</h1>
            <ExampleUseState/>
            <h1>Use Effect.......</h1>
            <ExampleUseEffect/>
            <h1>Use Reducer.......</h1>
            <ExampleUseReducer/>
        </div>
    );
}

export default App;
