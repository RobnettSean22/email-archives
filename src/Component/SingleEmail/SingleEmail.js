import React from "react";

const SingleEmail = props => {
  let toggleIndex = props.specIndex;

  console.log(props.mail);
  return (
    <div id='spec-email'>
      <button onClick={e => props.forward()}></button>
      <button onClick={e => props.back()}></button>
      <button
        onClick={e =>
          props.emailWindow(
            props.mail[toggleIndex].recipient,
            props.mail[toggleIndex].subject,
            props.mail[toggleIndex].info
          )
        }
      ></button>
      {props.mail[toggleIndex].info}
    </div>
  );
};

export default SingleEmail;
