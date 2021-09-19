import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import EmailLayout from "../EmailLayout/EmailLayout";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./DatePicker.scss";
import "./Emails.scss";
import moment from "moment";
import data from "../../data/email-archives.json";
import MagGlass from "../../Assets/icon_search.svg";

class Emails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      archives: data.emails,
      search: "",
      single: true,
      emailIndex: null,
      calendarSearch: true,
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month"),
    };
    this.handleSortFrom = this.handleSortFrom.bind(this);
    this.handleSortTo = this.handleSortTo.bind(this);
    this.handleSortDate = this.handleSortDate.bind(this);
    this.handleSortSubject = this.handleSortSubject.bind(this);
  }

  handleSortFrom = () => {
    this.setState({
      archives: this.state.archives.sort((a, b) => {
        // const abc = this.state.from ? -1 : 1;
        return -1 * a.recipient.localeCompare(b.recipient.toLowerCase());
      }),
    });
  };
  handleSortTo = () => {
    this.setState({
      archives: this.state.archives.sort((a, b) => {
        // const abc = this.state.from ? -1 : 1;
        return 1 * b.sender.localeCompare(a.sender.toLowerCase());
      }),
    });
  };
  handleSortSubject = () => {
    this.setState({
      archives: this.state.archives.sort((a, b) => {
        // const abc = this.state.from ? -1 : 1;
        return 1 * b.subject.localeCompare(a.subject.toLowerCase());
      }),
    });
  };
  handleSortDate = () => {
    this.setState({
      archives: this.state.archives.sort((a, b) => {
        return b.date.localeCompare(a.date);
      }),
    });
  };

  toSingleEmail = (index) => {
    this.setState({ single: false, emailIndex: index });
  };

  emailBody = (to, subject, body) => {
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
  results = () => {
    this.setState({
      single: true,
    });
  };

  render() {
    const { archives, emailIndex, search, single, startDate, endDate } =
      this.state;

    const filterEmails = archives.filter((mail) => {
      const formatDate = new Date(mail.date);

      if (startDate && endDate !== null) {
        return formatDate >= startDate._d && formatDate <= endDate._d;
      } else if (startDate && endDate === null) {
        return mail.date.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }
    });

    return (
      <div data-testid='mailbox' id='archive-container'>
        <div id='search'>
          <div className='filter-date'>
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              }
              focusedInput={this.state.focusedInput}
              onFocusChange={(focusedInput) => this.setState({ focusedInput })}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>

          <div className='glass'>
            <img src={MagGlass} alt='' />
          </div>
        </div>
        <div id='title-count'>
          <h2
            className={single ? "" : "clickable"}
            onClick={single ? null : this.results}
          >
            Results: {filterEmails.length}mail(s)
          </h2>
        </div>
        <EmailLayout
          emailSingle={single}
          emailNewArchives={archives}
          passStartDate={startDate}
          passEndDate={endDate}
          passFilterEmails={filterEmails}
          passSearch={search}
          passToSingleEmail={this.toSingleEmail}
          passEmailBody={this.handleEmailBody}
          passEmailIndex={emailIndex}
          sortFrom={this.handleSortFrom}
          sortTo={this.handleSortTo}
          sortDate={this.handleSortDate}
          sortSubject={this.handleSortSubject}
        />
      </div>
    );
  }
}

export default Emails;
