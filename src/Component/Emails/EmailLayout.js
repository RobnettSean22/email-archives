import React, { useState, useEffect } from "react";
import SortEmails from "./SortEmails";
import SingleEmail from "../SingleEmail/SingleEmail";

import Up from "../../Assets/icon_arrow01.svg";

const EmailLayout = (props) => {
  const [from, setFrom] = useState(true);
  const [to, setTo] = useState(false);
  const [subject, setSubject] = useState(false);
  const [date, setDate] = useState(false);

  const [newArchives, setNewArchives] = useState(props.emailNewArchives);

  useEffect(() => {
    handleDate();
  }, []);

  const handleFrom = () => {
    setFrom(true);
    setTo(false);
    setSubject(false);
    setDate(false);
    setNewArchives(props.sortFrom());
  };
  const handleTo = () => {
    setFrom(false);
    setTo(true);
    setSubject(false);
    setDate(false);
    setNewArchives(props.sortTo());
  };
  const handleSubject = () => {
    setFrom(false);
    setTo(false);
    setSubject(true);
    setDate(false);
    setNewArchives(props.sortSubject());
  };
  const handleDate = () => {
    setFrom(false);
    setTo(false);
    setSubject(false);
    setDate(true);
    setNewArchives(props.sortDate());
  };
  console.log(props.passFilterEmails);
  return (
    <div id='email'>
      <div id={props.emailSingle ? "mail-order" : "non-exgsistant"}>
        <div id='from'>
          <h2 onClick={handleFrom}>From</h2>
          <div>
            <img
              className={from === true ? "show-arrow" : "hide-arrow"}
              src={Up}
              alt=''
            />
          </div>
        </div>
        <div id='to'>
          <h2 onClick={handleTo}>To</h2>
          <div>
            <img
              className={to === true ? "show-arrow" : "hide-arrow"}
              src={Up}
              alt=''
            />
          </div>
        </div>
        <div id='about'>
          {" "}
          <h2 onClick={handleSubject}>Subject</h2>
          <div>
            <img
              className={subject === true ? "show-arrow" : "hide-arrow"}
              src={Up}
              alt=''
            />
          </div>
        </div>
        <div id='when'>
          {" "}
          <h2 onClick={handleDate}>Date</h2>
          <div>
            <img
              className={date === true ? "show-arrow" : "hide-arrow"}
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
          sortFrom={from}
          sortTo={to}
          sortSubject={subject}
          sortDate={date}
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
