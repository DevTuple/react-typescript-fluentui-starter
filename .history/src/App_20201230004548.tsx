import React from 'react';
import logo from './logo.svg';
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './layout/Navigation';
const boldStyle = { root: { fontWeight: FontWeights.semibold } };
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
    >
      <img
        src="https://raw.githubusercontent.com/Microsoft/just/master/packages/just-stack-uifabric/template/src/components/fabric.png"
        alt="logo"
      />
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to Your UI Fabric App
      </Text>
      <Text variant="large">For a guide on how to customize this project, check out the UI Fabric documentation.</Text>
      <Text variant="large" styles={boldStyle}>
        Essential Links
      </Text>
      <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
        <Link href="https://github.com/officeDev/office-ui-fabric-react/">Github</Link>
        <Link href="https://twitter.com/officeuifabric">Twitter</Link>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design System
      </Text>
      <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/icons">Icons</Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/typography">Typography</Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/themegenerator">Theme</Link>
      </Stack>
    </Stack>
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