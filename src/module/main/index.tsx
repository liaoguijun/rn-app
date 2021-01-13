import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Indexmark from '../indexmark';
import Money from '../money';
import Custom from '../custom';
import Notice from '../notice';
import More from '../more';
// import Chart from '../chart';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Custom"
        tabBarOptions={{activeTintColor: '#0073F7'}}>
        <Tab.Screen
          name="Indexmark"
          component={Indexmark}
          options={{
            title: '指数',
            tabBarIcon: () => (
              <Icon name="hourglass-start" size={24} color="#dddddd" />
            ),
          }}
        />
        <Tab.Screen
          name="Money"
          component={Money}
          options={{
            title: '钱包',
            tabBarIcon: () => <Icon name="money" size={24} color="#dddddd" />,
          }}
        />
        <Tab.Screen
          name="Custom"
          component={Custom}
          options={{
            title: '自选',
            tabBarIcon: () => <Icon name="home" size={24} color="#dddddd" />,
          }}
        />
        <Tab.Screen
          name="Notice"
          component={Notice}
          options={{
            title: '通知',
            tabBarIcon: () => <Icon name="bell" size={24} color="#dddddd" />,
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            title: '更多',
            tabBarIcon: () => (
              <Icon name="external-link" size={24} color="#dddddd" />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Chart"
          component={Chart}
          options={{
            title: 'chart',
            tabBarIcon: () => (
              <Icon name="external-link" size={24} color="#dddddd" />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </>
  );
};

export default Main;
