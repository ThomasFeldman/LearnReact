import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

class App extends React.Component{
    state = {};


    render(){
        return (
            <div><Button/></div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);