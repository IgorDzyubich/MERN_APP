import React from "react";
import { Link } from "react-router-dom";

const NotFounPage = (props) => {
  return (
    <div style={{margin: '0 auto'}}>
      <h1>404 - Not Found!</h1>
      <Link to="/dashboard">Go Home</Link>
    </div>
  );
};

export default NotFounPage;
