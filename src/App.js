import React, { Component } from "react";
import data from "./data/email-archives.json";
import Clip from "./Assets/icon_clip.svg";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      archives: data.emails
    };
  }

  render() {
    const { archives, search } = this.state;
    console.log(archives);
    const filterEmails = archives
      .filter(mail => {
        return (
          mail.sender.indexOf(search) !== -1 ||
          mail.recipient.indexOf(search) !== -1 ||
          mail.subject.indexOf(search) !== -1 ||
          mail.body.indexOf(search) !== -1 ||
          mail.date.indexOf(search) !== -1
        );
      })
      .map((emails, i) => {
        return (
          <div id='mail-list' key={i}>
            <div className='sender'>
              <h3>{emails.sender}</h3>
            </div>
            <div className='recipient'>
              {" "}
              <h3>{emails.recipient}</h3>
            </div>
            <div className='subject'>
              {" "}
              <h3>{emails.subject}</h3>
            </div>
            <div className={emails.attachment === true ? "attach" : "hide"}>
              <img src={Clip} />
            </div>
            <div
              className={
                emails.attachment === true ? "date" : "date-with-attachment"
              }
            >
              {" "}
              <h3>{emails.date}</h3>
            </div>
          </div>
        );
      });
    console.log(data);
    return (
      <div id='archive-container'>
        <div id='search'>
          <input onChange={e => this.setState({ search: e.target.value })} />
        </div>
        <div id='title-count'>
          <h3>Results: {filterEmails.length}mail(s)</h3>
        </div>
        <div id='email'>
          <div id='mail-order'>
            <div id='from'>
              <h2>From</h2>
            </div>
            <div id='to'>
              <h2>To</h2>
            </div>
            <div id='about'>
              {" "}
              <h2>Subject</h2>
            </div>
            <div id='when'>
              {" "}
              <h2>Date</h2>
            </div>
          </div>
          <div id='mail-content'>{filterEmails}</div>
        </div>
      </div>
    );
  }
}

export default App;
