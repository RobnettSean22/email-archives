import React from "react";
import "./SingleEmail.scss";
import Left from "../../Assets/icon_arrow01.svg";

const SingleEmail = props => {
  let toggleIndex = props.specIndex;

  console.log(props.mail);
  return (
    <div id='spec-email'>
      <div id='controls'>
        <div id='toggle-controls'>
          <img src={Left} alt='' className='left' onClick={e => props.back()} />
          <img
            src={Left}
            alt=''
            className='right'
            onClick={e => props.forward()}
          />
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
        <h3>
          {props.mail[toggleIndex].sender} <span>to {""} </span>
          {props.mail[toggleIndex].recipient}
        </h3>
      </div>
      <div id='about'>
        <h4>{props.mail[toggleIndex].subject}</h4>
      </div>
      <div id='content'>
        <p>{props.mail[toggleIndex].info}</p>
      </div>
    </div>
  );
};

export default SingleEmail;
