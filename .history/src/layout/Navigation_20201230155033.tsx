import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';

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
      ,
      {
        name: 'Entities',
        key: 'key3',
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
      ,
      {
        name: 'Entities',
        key: 'key4',
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

const Navigation = () => {
  initializeIcons();
  return (
    <Nav
      groups={links}
      selectedKey='key1'
      styles={navigationStyles}
    />
  );
};

export default Navigation;