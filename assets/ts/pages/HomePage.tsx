import * as React from "react";
import {
  FunctionComponent,
  PropsWithChildren
} from "react";

const HomePage: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <div className="page-home">
      {children}
    </div>
  );
};

export default HomePage;