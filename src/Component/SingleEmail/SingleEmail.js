import React, { useReducer } from "react";
import "./SingleEmail.scss";
import Left from "../../Assets/icon_arrow01.svg";
import Arrows from "../../Assets/arrows_rotated.svg";

const SingleEmail = (props) => {
  const ACTION = { INCREMENT: "increment", DECREMENT: "decrement" };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION.INCREMENT:
        return state.state.countIndex === state.length - 1
          ? { countIndex: 0 }
          : { countIndex: state.state.countIndex + 1 };
      case ACTION.DECREMENT:
        return state.state.countIndex === 0
          ? { countIndex: state.length - 1 }
          : { countIndex: state.state.countIndex - 1 };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    countIndex: props.specIndex,
    length: props.endOfLength,
  });

  const handleForward = () => {
    dispatch({ type: ACTION.INCREMENT });
  };
  const handleBack = () => {
    dispatch({ type: ACTION.DECREMENT });
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
            onClick={(e) => handleBack()}
          />
          <img
            src={Left}
            alt=''
            className='right'
            onClick={(e) => handleForward()}
          />
        </div>
        <div id='new-window'>
          <div>
            <img
              src={Arrows}
              alt=''
              onClick={(e) =>
                handleEmailWindow(
                  props.mail[state.countIndex].recipient,
                  props.mail[state.countIndex].subject,
                  props.mail[state.countIndex].info
                )
              }
            />
          </div>
        </div>
      </div>
      <div id='contact'>
        <h3>
          {props.mail[state.countIndex].sender} <span>to {""} </span>
          {props.mail[state.countIndex].recipient}
        </h3>
      </div>
      <div id='about'>
        <h4>{props.mail[state.countIndex].subject}</h4>
      </div>
      <div id='content'>
        <p>{props.mail[state.countIndex].info}</p>
      </div>
    </div>
  );
};

export default SingleEmail;
