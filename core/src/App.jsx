import React from "react";
import { Button } from "@usp/components";
import { hot } from "react-hot-loader/root";

const App = () => {
  return (
    <div>
      <h1>App...</h1>
      <Button primary="true" label="Button" />
    </div>
  );
};

export default hot(App);
