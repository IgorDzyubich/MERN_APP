import React from "react";
import { Link } from "react-router-dom";

const NotFounPageFree = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <h1>404 - Not Found!</h1>
      <Link to="/app">Go Main Page</Link>
    </div>
  );
};

export default NotFounPageFree;
