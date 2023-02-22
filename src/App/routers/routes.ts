import React from "react";

const DashboardScreen = React.lazy(() => { return new Promise((resolve : any)  => {
    setTimeout(() => resolve(import("../modules/dashboard")), 2000);
  });
});
const LoginScreen = React.lazy(() => { return new Promise((resolve : any)  => {
    setTimeout(() => resolve(import("../modules/login")), 2000);
  });
});

const ROUTERS = [
  {
    path: '/login',
    Component: LoginScreen,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/',
    Component: DashboardScreen,
    exact: true,
    isPrivate: false,
  },
];

export default ROUTERS;