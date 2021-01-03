import React from 'react';
import logo from './logo.svg';
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './layout/Navigation';

function App() {
  return (
    
    <div className="ms-Grid" dir="ltr">
      <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: '960px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#605e5c'
        }
      }}
      gap={15}
    ></Stack>
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
