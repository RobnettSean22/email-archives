import React, { useState } from "react";
import "./SingleEmail.scss";
import Left from "../../Assets/icon_arrow01.svg";
import Arrows from "../../Assets/arrows_rotated.svg";

const SingleEmail = (props) => {
  const [specifiedIndex, setSpecifiedIndex] = useState(props.specIndex);
  const [toggle, setToggle] = useState(props.endOfLength);

  const handleForward = (length) => {
    if (specifiedIndex === length - 1) {
      setSpecifiedIndex(0);
    } else {
      setSpecifiedIndex(specifiedIndex + 1);
    }
  };
  const handleBack = (length) => {
    if (specifiedIndex === 0) {
      setSpecifiedIndex(length - 1);
    } else {
      setSpecifiedIndex(specifiedIndex - 1);
    }
  };

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

  return (
    <div id='spec-email'>
      <div id='controls'>
        <div id='toggle-controls'>
          <img
            src={Left}
            alt=''
            className='left'
            onClick={(e) => handleBack(toggle)}
          />
          <img
            src={Left}
            alt=''
            className='right'
            onClick={(e) => handleForward(toggle)}
          />
        </div>
        <div id='new-window'>
          <div>
            <img
              src={Arrows}
              alt=''
              onClick={(e) =>
                handleEmailWindow(
                  props.mail[specifiedIndex].recipient,
                  props.mail[specifiedIndex].subject,
                  props.mail[specifiedIndex].info
                )
              }
            />
          </div>
        </div>
      </div>
      <div id='contact'>
        <h3>
          {props.mail[specifiedIndex].sender} <span>to {""} </span>
          {props.mail[specifiedIndex].recipient}
        </h3>
      </div>
      <div id='about'>
        <h4>{props.mail[specifiedIndex].subject}</h4>
      </div>
      <div id='content'>
        <p>{props.mail[specifiedIndex].info}</p>
      </div>
    </div>
  );
};

export default SingleEmail;
