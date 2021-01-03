import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';
import { withRouter, Switch, Route } from 'react-router-dom';
import {Entities} from '../pages/Entities';

const navigationStyles = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    //overflowY: 'auto',
    //paddingTop: '12vh',
  },
};

const links = [
  {
    links: [
      {
        name: 'Dashboard',
        key:'key1',
        url: '/',
        iconProps: {
          iconName: 'News',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Entities',
        key: 'key2',
        url: '/entities',
        iconProps: {
          iconName: 'PlayerSettings',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      
      {
        name: 'Applications',
        key: 'key3',
        url: '/applications',
        iconProps: {
          iconName: 'PlayerSettings',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      
      {
        name: 'Services',
        key: 'key4',
        url: '/services',
        iconProps: {
          iconName: 'PlayerSettings',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Transfer',
        key: 'key5',
        url: '/',
        iconProps: {
          iconName: 'SwitcherStartEnd',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Stats',
        key: 'key6',
        url: '/',
        iconProps: {
          iconName: 'StackedLineChart',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
    ],
  },
];

const linkClickHandler = (event:any,{key,url})=>{

}

const AppNav = withRouter(({history}) => (
  
  
    <Nav
      groups={links}
      onLinkClick={linkClickHandler}
      selectedKey='key1'
      styles={navigationStyles}
    />
   
  
));
export default class Navigation extends React.Component {
  render() {
    initializeIcons();
    return (
      <div >
        <AppNav />
       
    
      </div>
    )
  }
}
//export default Navigation;