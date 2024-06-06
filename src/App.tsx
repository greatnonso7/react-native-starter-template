import {ThemeProvider} from '@emotion/react';
import Navigation from './navigation';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store} from 'redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {getPersistor} from '@rematch/persist';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import theme from 'theme';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={getPersistor()}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Navigation />
          </ThemeProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
