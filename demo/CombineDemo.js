import React from 'react';
import Demo1 from './Demo1';

export default function CombineDemo() {
  // Append your demo component with unique key into the follow array
  return [
    <Demo1 key="demo1" />,
  ];
}
