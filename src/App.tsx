import * as React from 'react';
import Routes from './routes';
import {Provider} from 'mobx-react';
import stores from './shared/index';

const App = () => {
  return (
    <Provider {...stores}>
      <Routes />
    </Provider>
  );
};

export default App;
