import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
//components
import Navigation from './src/navigation/Index';
import NetInfoListener from './src/services/NetInfoListener';
//redux
import {store} from './src/services/Redux/store';

import {toastConfig} from './src/services/toastConfig';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Navigation />
      <Toast config={toastConfig} />
      <NetInfoListener />
    </Provider>
  );
};

export default App;
