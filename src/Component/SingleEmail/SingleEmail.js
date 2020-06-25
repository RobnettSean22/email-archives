import React from "react";
import "./SingleEmail.scss";

const SingleEmail = props => {
  let toggleIndex = props.specIndex;

  console.log(props.mail);
  return (
    <div id='spec-email'>
      <div id='controls'>
        <div id='toggle-controls'>
          <button onClick={e => props.forward()}></button>
          <button onClick={e => props.back()}></button>
        </div>
        <div id='new-window'>
          <button
            onClick={e =>
              props.emailWindow(
                props.mail[toggleIndex].recipient,
                props.mail[toggleIndex].subject,
                props.mail[toggleIndex].info
              )
            }
          ></button>
        </div>
      </div>
      <div id='contact'>
        <h2>
          {props.mail[toggleIndex].sender} to{" "}
          {props.mail[toggleIndex].recipient}
        </h2>
      </div>
      <div id='about'>
        <h3>{props.mail[toggleIndex].subject}</h3>
      </div>
      <div id='content'>
        <p>{props.mail[toggleIndex].info}</p>
      </div>
    </div>
  );
};

export default SingleEmail;
