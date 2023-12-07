// import React from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const reloadPage = setTimeout(() => {
      navigate(-1);
    }, 5000);
    return () => clearTimeout(reloadPage);
  }, [navigate]);
  return (
    <>
      {/* <div>Error: Page Not Found</div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back?
      </button> */}
      <h1>
        Error: Page Not Found! Sending you back to previous page in 5 seconds...
      </h1>
    </>
  );
};
