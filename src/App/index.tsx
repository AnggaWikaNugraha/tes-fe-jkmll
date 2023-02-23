import React, { Suspense } from "react";
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import PrivateApp from "./routers/privateRoute";
import ROUTERS from "./routers/routes";
import Redux from './redux/store';
import FormContext from "./context/formContext";
import SummaryContext from "./context/summaryContext";

function App() {
  return (
      <Suspense>
        <FormContext>
          <SummaryContext>
          <Provider store={Redux.store}>
            <PersistGate loading={null} persistor={Redux.persistor}>
              <BrowserRouter>
                <Switch>
                  {ROUTERS.map(({ isPrivate, Component, ...route }, i) => {
                    if (isPrivate) {
                      return (
                        <PrivateApp key={i} {...route}>
                          <Component />
                        </PrivateApp>
                      );
                    }
                    return (
                      <Route key={i} {...route}>
                          <Component />
                      </Route>
                    );
                  })}
                </Switch>
              </BrowserRouter>
            </PersistGate>
          </Provider>
          </SummaryContext>
        </FormContext>
      </Suspense>
  );
}

export default App;
