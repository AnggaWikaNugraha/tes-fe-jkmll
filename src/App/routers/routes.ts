import React from "react";

const DashboardScreen = React.lazy(() => { return new Promise((resolve : any)  => {
    setTimeout(() => resolve(import("../modules/delivery")), 2000);
  });
});
const PaymentScreen = React.lazy(() => { return new Promise((resolve : any)  => {
  setTimeout(() => resolve(import("../modules/payment")), 2000);
  });
});
const FinishScreen = React.lazy(() => { return new Promise((resolve : any)  => {
  setTimeout(() => resolve(import("../modules/finish")), 2000);
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
  {
    path: '/payment',
    Component: PaymentScreen,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/finsh',
    Component: FinishScreen,
    exact: true,
    isPrivate: false,
  },
];

export default ROUTERS;