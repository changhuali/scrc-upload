import React from 'react';
import ReactDom from 'react-dom';
import Demo1 from './Demo1';

function AllDemos() {
  // Append your demo component with unique key into the follow array
  return [
    <Demo1 key="demo11" />,
  ];
}

const root = document.getElementById('react-root');
ReactDom.render(
  <AllDemos />,
  root
);
