import React from 'react';
import logo from './logo.svg';
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react';
import { Layer } from 'office-ui-fabric-react/lib/Layer';
import { AnimationClassNames, mergeStyles, getTheme } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './layout/Navigation';
const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const theme = getTheme();
const contentClass = mergeStyles([
  {
    backgroundColor: theme.palette.themePrimary,
    color: theme.palette.white,
    lineHeight: '100px',
    padding: '0 20px',
  },
  AnimationClassNames.scaleUpIn100,
]);
function App() {
  const content = <div className={contentClass}>Hello world</div>;
  return (
    
    <div className="ms-Grid" dir="ltr">
     <Layer>{content}</Layer>
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm1 ms-xl1">
        <Navigation />
      </div>
      <div className="main-element ms-Grid-col ms-sm11 ms-xl11">
        <div className="ms-Grid-row">

        </div>
        <div className="ms-Grid-row">

        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
