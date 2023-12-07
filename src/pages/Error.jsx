// import React from "react";

import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Error: Page Not Found</div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back?
      </button>
    </>
  );
};
