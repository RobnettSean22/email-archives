import React, { useState } from "react";
import "./SingleEmail.scss";
import Left from "../../Assets/icon_arrow01.svg";
import Arrows from "../../Assets/arrows_rotated.svg";

const SingleEmail = (props) => {
  const { setEmailIndex, emailIndex } = useState(null);

  let toggleIndex = props.specIndex;
  let toggleCycle = props.toggleEnd;

  const handleEmailWindow = (to, subject, body) => {
    var randomnumber = Math.floor(Math.random() * 100 + 1);
    window
      .open(
        "",
        "_blank",
        "scrollbars=1,menubar=0,resizable=1,width=550,height=400,left=1000, top=1000",
        randomnumber
      )
      .document.write(
        "<h1> Recipient: " + to + "</h1>",
        "<h2> Subject" + subject + "</h2>",
        "<h3>" + body + "</h3>"
      );
  };

  console.log(toggleCycle);
  return (
    <div id='spec-email'>
      <div id='controls'>
        <div id='toggle-controls'>
          <img
            src={Left}
            alt=''
            className='left'
            onClick={(e) => props.back(toggleCycle)}
          />
          <img
            src={Left}
            alt=''
            className='right'
            onClick={(e) => props.forward(toggleCycle)}
          />
        </div>
        <div id='new-window'>
          <div>
            <img
              src={Arrows}
              alt=''
              onClick={(e) =>
                handleEmailWindow(
                  props.mail[toggleIndex].recipient,
                  props.mail[toggleIndex].subject,
                  props.mail[toggleIndex].info
                )
              }
            />
          </div>
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
