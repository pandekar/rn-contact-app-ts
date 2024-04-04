import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as screens from '../screens';
import {screenConstants} from '../constants';
import {colorConstants} from '../constants';

import type {RouterStackParamList} from '../types/index.types';

const {HOME, CONTACT_ADD, CONTACT_DETAIL} = screenConstants;

const Router = (): React.JSX.Element => {
  const RouterStack = createStackNavigator<RouterStackParamList>();

  return (
    <RouterStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorConstants.primary,
        },
        headerTintColor: '#fff',
      }}>
      <RouterStack.Screen
        name={HOME}
        component={screens.Home}
        options={{headerShown: false}}
      />
      <RouterStack.Screen
        name={CONTACT_ADD}
        component={screens.ContactAdd}
        options={{
          title: 'back',
        }}
      />
      <RouterStack.Screen
        name={CONTACT_DETAIL}
        component={screens.ContactDetail}
        options={{
          title: 'back',
        }}
      />
    </RouterStack.Navigator>
  );
};

export default Router;
