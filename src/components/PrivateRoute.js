import React from "react";
import { Route } from "react-router-dom";
import SignInWrapper from "./SignInWrapper";

const PrivateRoute = ({ element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        <SignInWrapper>
          <Component />
        </SignInWrapper>
      }
    />
  );
};

export default PrivateRoute;
