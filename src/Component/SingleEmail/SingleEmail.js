import React from "react";

const SingleEmail = props => {
  let toggleIndex = props.params.match;
  const toggleForward = () => {
    return toggleIndex + 1;
  };
  const toggleBack = () => {
    return toggleIndex - 1;
  };

  return (
    <div>
      {" "}
      <button onClick={e => toggleForward}></button>
      <button onClick={e => toggleBack}></button>
    </div>
  );
};

export default SingleEmail;
