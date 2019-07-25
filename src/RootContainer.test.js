import React from 'react';
import ReactDOM from 'react-dom';
import ParentContainer from './ParentContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ParentContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});