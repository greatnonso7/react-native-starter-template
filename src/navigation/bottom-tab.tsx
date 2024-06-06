/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cards from 'screens/dashboard/cards';
import Home from 'screens/dashboard/home';
import More from 'screens/dashboard/more';
import History from 'screens/dashboard/history';
import theme from 'theme';
import {hp} from 'utils';
import {BottomTab} from 'shared';
import {BottomTabStackParamList} from 'types';

const DashboardBottomTabs = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabBar = () => {
  return (
    <DashboardBottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        unmountOnBlur: true,
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.colors.WHITE,
        },
        tabBarActiveTintColor: theme.colors.WHITE,
        tabBarLabelStyle: {
          fontSize: hp(10),
          fontFamily: theme.font.InterRegular,
        },
        tabBarShowLabel: false,
      }}>
      <DashboardBottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <BottomTab name="Home" focused={focused} />;
          },
        }}
      />
      <DashboardBottomTabs.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <BottomTab name="History" focused={focused} />
          ),
        }}
      />
      <DashboardBottomTabs.Screen
        name="Cards"
        component={Cards}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <BottomTab name="Cards" focused={focused} />
          ),
        }}
      />
      <DashboardBottomTabs.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <BottomTab name="More" focused={focused} />
          ),
        }}
      />
    </DashboardBottomTabs.Navigator>
  );
};

export default BottomTabBar;
