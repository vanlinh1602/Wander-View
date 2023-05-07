import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';

import store from './src/redux';
import Workspace from './src/screens';

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Workspace />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
