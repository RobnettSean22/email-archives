import React from "react";

const SingleEmail = props => {
  let toggleIndex = props.specIndex;

  console.log(props.mail);
  return <div id='spec-email'>{props.mail[toggleIndex].info}</div>;
};

export default SingleEmail;
