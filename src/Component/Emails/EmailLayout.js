import React, { useState } from "react";
import SortEmails from "./SortEmails";
import SingleEmail from "../SingleEmail/SingleEmail";
import { Component } from "react/cjs/react.production.min";
import Up from "../../Assets/icon_arrow01.svg";

const EmailLayout = (props) => {
  const { setFrom, from } = useState(true);
  const { setTo, to } = useState(false);
  const { setSubject, subject } = useState(false);
  const { setDate, date } = useState(false);
  const { setEmailIndex, emailIndex } = useState(null);
  const { setNewArchives, newArchives } = useState(props.emailNewArchives);

  //   componentDidMount() {
  //     this.focusDate();
  //   }

  const focusFrom = () => {
    setFrom();
    setTo();
    setSubject();
    setDate();
    setNewArchives(
      newArchives.sort((a, b) => {
        const abc = from ? -1 : 1;
        return abc * b.recipient.localeCompare(a.recipient.toLowerCase());
      })
    );

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
  const focusTo = () => {
    this.setState({
      from: false,
      to: true,
      subject: false,
      date: false,
      archives: props.emailArchives.sort((a, b) => {
        const abc = from ? -1 : 1;
        return abc * b.sender.localeCompare(a.sender.toLowerCase());
      }),
    });
  };
  const focusSubject = () => {
    this.setState({
      from: false,
      to: false,
      subject: true,
      date: false,
      archives: props.emailArchives.sort((a, b) => {
        const abc = from ? -1 : 1;
        return abc * b.subject.localeCompare(a.subject.toLowerCase());
      }),
    });
  };
  const focusDate = () => {
    this.setState({
      from: false,
      to: false,
      subject: false,
      date: true,
      archives: props.emailArchives.sort((a, b) => {
        return b.date.localeCompare(a.date);
      }),
    });
  };

  return (
    <div id='email'>
      <div id={props.emailSingle ? "mail-order" : "non-exgsistant"}>
        <div id='from'>
          <h2 onClick={focusFrom}>From</h2>
          <div>
            <img
              className={from === true ? "show-arrow" : "hide-arrow"}
              src={Up}
              alt=''
            />
          </div>
        </div>
        <div id='to'>
          <h2 onClick={focusTo}>To</h2>
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
          <h2 onClick={focusSubject}>Subject</h2>
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
          <h2 onClick={focusDate}>Date</h2>
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
        />
      ) : (
        <SingleEmail
          mail={newArchives}
          specIndex={emailIndex}
          back={this.toggleBack}
          forward={this.toggleForward}
          emailWindow={this.emailBody}
          toggleEnd={props.passFilterEmails.length}
        />
      )}
    </div>
  );
};

export default EmailLayout;
