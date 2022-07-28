// Entry point for the build script in your package.json
import * as bootstrap from "bootstrap"

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import GlobalHeader from "./components/GlobalHeader";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div>
      <Outlet />
      <p>Welcome to TeaDB</p>
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalHeader />
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
