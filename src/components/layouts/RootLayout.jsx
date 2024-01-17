// react-router imports
import { Outlet } from "react-router-dom";

// components

import Header from "./../shared/Header/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
