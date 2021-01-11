import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './module/home';
import Page1 from './module/page1';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Page1">
        <Drawer.Screen
          name="Home"
          options={{title: '基本图表'}}
          component={Home}
        />
        <Drawer.Screen
          name="Page1"
          options={{title: 'Dashboard'}}
          component={Page1}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
