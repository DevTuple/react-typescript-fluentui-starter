import React from 'react';
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';


const container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10vh 0',
};

const icon = {
  fontSize: 24,
  padding: 15,
  verticalAlign: 'middle',
  paddingLeft: 0,
  color: '#0078d4'
}

const styles = {
  cardStyles: {
    root: {
      background: 'white',
      padding: 20,
      borderTop: '5px solid #0078d4',
      width: '90%',
      maxWidth: '90%',
      margin: 'auto',
    }
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  },
  amount: {
    root: {
      fontSize: 26,
      paddingBottom: 20,
      paddingTop: 30,
    }
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0078d4',
    }
  }
};

const entities = [
  {
    title: 'Entity Balance',
    amount: '$ 837',
    icon: 'Money',
    percentage: '2.3',
  },
  {
    title: 'Entity Expanses',
    amount: '$ 927',
    icon: 'PaymentCard',
    percentage: '0.3'
  },
  {
    title: 'Entity Income',
    amount: '$ 093',
    icon: 'Savings',
    percentage: '1.3'
  }
]

const EntityListComponent = () => {
  initializeIcons();
  return (
    <div style={container}>
      {entities.map((entity,index) => (
        <div className="s-Grid-col ms-sm3 ms-xl3" key={index}>
          <Card styles={styles.cardStyles}>
            <Card.Section>
              <Card.Item>
                
                <Text styles={styles.header}>{entity.title}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.amount}>{entity.amount}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.percentage}>
                  {entity.percentage} %
                </Text>
              </Card.Item>
            </Card.Section>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default EntityListComponent;