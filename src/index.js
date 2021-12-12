import './wdyr';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import store from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <BaseLayout>
            <App />
          </BaseLayout>
        </Router>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
