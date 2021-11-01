import React from 'react';
import ReactDOM from 'react-dom';
const title = React.createElement('h1',{id: 'box', className: 'demo'}, '这是一个react案例')
ReactDOM.render(title, document.querySelector('#root'))