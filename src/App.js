import React, { Component } from "react";
import data from "./data/email-archives.json";
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
            <li>{emails.sender}</li>
            <li>{emails.recipient}</li>
            <li>{emails.subject}</li>
            <li>{emails.date}</li>
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
          <h3>Results: 0 mail(s)</h3>
        </div>
        <div id='email'>
          <div id='mail-order'>
            <h2>From</h2>
            <h2>To</h2>
            <h2>Subject</h2>
            <h2>Date</h2>
          </div>
          <div id='mail-content'>{filterEmails}</div>
        </div>
      </div>
    );
  }
}

export default App;
