import React, { Fragment } from "react";
import RepoList from "./repoList";

const App = () => {
  console.log("rendering react app");
  return (
    <Fragment>
      <h1 style={{ color: "blue" }}>This is a React application</h1>
      <RepoList />
    </Fragment>
  );
};

export default App;
