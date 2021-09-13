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
  console.log(newArchives);
  //   componentDidMount() {
  //     this.handleDate();
  //   }
  useEffect(() => {
    // handleDate();
  }, []);

  const handleFrom = () => {
    setFrom(true);
    setTo(false);
    setSubject(false);
    setDate(false);
    setNewArchives(props.sortFrom());

    // this.setState({
    //   from: true,
    //   to: false,
    //   subject: false,
    //   date: false,
    //   archives: newArchives.sort((a, b) => {
    //     const abc = from ? -1 : 1;
    //     return abc * b.recipient.localeCompare(a.recipient.toLowerCase());
    //   }),
    // });
  };
  const handleTo = () => {
    setFrom(false);
    setTo(true);
    setSubject(false);
    setDate(false);
    setNewArchives(props.sortTo());

    // this.setState({
    //   from: false,
    //   to: true,
    //   subject: false,
    //   date: false,
    //   archives: props.emailArchives.sort((a, b) => {
    //     const abc = from ? -1 : 1;
    //     return abc * b.sender.localeCompare(a.sender.toLowerCase());
    //   }),
    // });
  };
  const handleSubject = () => {
    setFrom(false);
    setTo(false);
    setSubject(true);
    setDate(false);
    setNewArchives(props.sortSubject());
    // this.setState({
    //   from: false,
    //   to: false,
    //   subject: true,
    //   date: false,
    //   archives: props.emailArchives.sort((a, b) => {
    //     const abc = from ? -1 : 1;
    //     return abc * b.subject.localeCompare(a.subject.toLowerCase());
    //   }),
    // });
  };
  const handleDate = () => {
    setFrom(false);
    setTo(false);
    setSubject(false);
    setDate(true);
    setNewArchives(props.sortDate());
    // this.setState({
    //   from: false,
    //   to: false,
    //   subject: false,
    //   date: true,
    //   archives: props.emailArchives.sort((a, b) => {
    //     return b.date.localeCompare(a.date);
    //   }),
    // });
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
        // <div id='mail-content'>{filterEmails}</div>
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
