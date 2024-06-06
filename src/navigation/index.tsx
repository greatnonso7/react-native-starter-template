import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AuthStack from './auth';
import DashboardStack from './dashboard';
import {RootStackParamList} from 'types';
import {useSelector} from 'react-redux';
import {navigationRef} from './utils';
import {Linking, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getIsLoggedIn} from 'redux/selectors';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';
const Stack = createStackNavigator<RootStackParamList>();

const AppNav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName={isLoggedIn ? 'AppDashboard' : 'Auth'}>
      {isLoggedIn ? (
        <Stack.Screen name="AppDashboard" component={DashboardStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={__DEV__ ? initialState : undefined}
      onStateChange={state =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }>
      <AppNav />
    </NavigationContainer>
  );
};

export default Navigation;