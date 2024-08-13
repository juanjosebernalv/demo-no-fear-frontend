import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import './i18n';
import { AppContextProvider } from './components/AppContext/AppContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginForm from './pages/LoginForm';
import GetAuthors from './pages/GetAuthors';
import MemoExample from './pages/MemoExample';
import CallbackExample from './pages/CallbackExample';
import { store } from './app/store/store'
import { Provider } from 'react-redux'
import { ReduxExample } from './pages/ReduxExample';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/authors",
    element: <GetAuthors />,
  },
  {
    path: "/memo",
    element: <MemoExample />,
  },
  {
    path: "/callback",
    element: <CallbackExample />,
  },
  {
    path: "/redux",
    element: <ReduxExample />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </Provider>
);

