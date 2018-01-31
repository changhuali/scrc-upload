import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import toReactElement from 'jsonml-to-react-element';
import CombineDemo from './CombineDemo';
import jsonML from './Md';
import './md.less';

const mountNode = document.getElementById('react-root');
const render = (Component) => {
  const mdJson = jsonML.content;
  const demoIndex = mdJson.findIndex(item => item instanceof Array && item.includes('代码演示')) + 1;
  const hasDemo = mdJson.find(item => item[1] === 'demo');
  if (!hasDemo) {
    mdJson.splice(demoIndex, 0, ['section', 'demo']);
  }
  const addDemo = [
    [
      node => ['demo'].indexOf(node[1]) > -1,
      (node, index) => {
        return React.createElement(
          'section',
          { key: index },
          <Component />,
        );
      },
    ],
  ];
  ReactDom.render(
    <AppContainer>
      {toReactElement(mdJson, addDemo)}
    </AppContainer>,
    mountNode,
  );
};

render(CombineDemo);

if (module.hot) {
  module.hot.accept();
}
