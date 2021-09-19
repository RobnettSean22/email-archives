import React, { useState, useEffect, useReducer } from "react";
import SortEmails from "../SortEmails/SortEmails";
import SingleEmail from "../SingleEmail/SingleEmail";
import Up from "../../Assets/icon_arrow01.svg";
import "./EmailLayout.scss";

const EmailLayout = (props) => {
  // const [from, setFrom] = useState(true);
  // const [to, setTo] = useState(false);
  // const [subject, setSubject] = useState(false);
  // const [date, setDate] = useState(false);
  // const [newArchives, setNewArchives] = useState(props.emailNewArchives);

  const SORTACTIONS = {
    SORTTO: "to",
    SORTFROM: "from",
    SORTDATE: "date",
    SORTSUBJECT: "subject",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case SORTACTIONS.SORTFROM:
        return { mailer: "from", order: props.sortFrom() };
      case SORTACTIONS.SORTTO:
        return { mailer: "to", order: props.sortTo() };
      case SORTACTIONS.SORTSUBJECT:
        return { mailer: "subject", order: props.sortSubject() };
      case SORTACTIONS.SORTDATE:
        return { mailer: "date", order: props.sortDate() };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    mailer: "date",
    order: "",
  });

  useEffect(() => {
    dispatch({ type: SORTACTIONS.SORTDATE });
  }, []);

  return (
    <div id='email'>
      <div id={props.emailSingle ? "mail-order" : "non-exgsistant"}>
        <div id='from'>
          <h2 onClick={() => dispatch({ type: SORTACTIONS.SORTFROM })}>From</h2>
          <div>
            <img
              className={() =>
                state.mailer === "from" ? "show-arrow" : "hide-arrow"
              }
              src={Up}
              alt=''
            />
          </div>
        </div>
        <div id='to'>
          <h2 onClick={() => dispatch({ type: SORTACTIONS.SORTTO })}>To</h2>
          <div>
            <img
              className={state.mailer === "to" ? "show-arrow" : "hide-arrow"}
              src={Up}
              alt=''
            />
          </div>
        </div>
        <div id='about'>
          {" "}
          <h2 onClick={() => dispatch({ type: SORTACTIONS.SORTSUBJECT })}>
            Subject
          </h2>
          <div>
            <img
              className={
                state.mailer === "subject" ? "show-arrow" : "hide-arrow"
              }
              src={Up}
              alt=''
            />
          </div>
        </div>
        <div id='when'>
          {" "}
          <h2 onClick={() => dispatch({ type: SORTACTIONS.SORTFROM })}>Date</h2>
          <div>
            <img
              className={state.mailer === "date" ? "show-arrow" : "hide-arrow"}
              src={Up}
              alt=''
            />
          </div>
        </div>
      </div>
      {props.emailSingle ? (
        <SortEmails
          emailArchives={props.passFilterEmails}
          sortStartDate={props.passStartDate}
          sortEndDate={props.passEndDate}
          sortSearch={props.passSearch}
          selectedMailer={state.mailer}
          openSingleEmail={props.passToSingleEmail}
        />
      ) : (
        <SingleEmail
          mail={props.passFilterEmails}
          specIndex={props.passEmailIndex}
          handleEmailWindow={props.passhandleEmailBody}
          endOfLength={props.passFilterEmails.length}
        />
      )}
    </div>
  );
};

export default EmailLayout;
