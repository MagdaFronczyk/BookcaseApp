import React from 'react';
import Toast from 'react-native-toast-message';
//components
import Navigation from './src/navigation/Index';

import {toastConfig} from './src/services/toastConfig';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navigation />;
      <Toast config={toastConfig} />
    </>
  );
};

export default App;
