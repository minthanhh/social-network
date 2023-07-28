import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import { AppRouter } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <AppRouter />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
);
