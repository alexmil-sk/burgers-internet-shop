import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux-toolkit/store.js';
import {Provider} from 'react-redux'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const rootElement = document.getElementById('root');

if(rootElement) {
  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}
          >
            <App/>
          </DevSupport>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
  
}
