import React from 'react';
import ReactDom from 'react-dom';
import CombineDemo from './CombineDemo';
import { AppContainer } from 'react-hot-loader'

const mountNode = document.getElementById('react-root');
const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    mountNode
  );
};

render(CombineDemo);

if(module.hot) {
  module.hot.accept();
}
