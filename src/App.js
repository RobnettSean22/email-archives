import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import data from "./data/email-archives.json";
import Clip from "./Assets/icon_clip.svg";
import dateRange from "./Assets/icon_calender.svg";
import MagGlass from "./Assets/icon_search.svg";

import "./App.scss";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      archives: data.emails,
      calendarSearch: true,
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month"),
      focused: null
    };
    // this.calendar = this.calendar.bind(this);
    // this.searchFilter = this.searchFilter.bind(this);
  }

  calendar = () => {
    this.setState({
      calendarSearch: true
    });
  };

  searchFilter = () => {
    this.setState({
      calendarSearch: false
    });
  };

  render() {
    const { archives, search, calendarSearch, startDate, endDate } = this.state;
    console.log(34343434, startDate._d, endDate._d);

    const filterEmails = archives
      .filter(mail => {
        let formatDate = new Date(mail.date);
        console.log(222, startDate._d.toString(), endDate._d.toString());
        console.log(333, formatDate);
        return (
          // formatDate.toString() >= startDate._d.toString() ||
          // formatDate.toString() <= endDate._d.toString() ||
          mail.sender.indexOf(search) !== -1 ||
          mail.recipient.indexOf(search) !== -1 ||
          mail.subject.indexOf(search) !== -1 ||
          mail.body.indexOf(search) !== -1
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
              <img src={Clip} alt='' />
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

    return (
      <div id='archive-container'>
        <div id='search'>
          {calendarSearch === true ? (
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId='your_unique_start_date_id' // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId='your_unique_end_date_id' // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              } // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              isOutsideRange={() => false}
            />
          ) : (
            <input onChange={e => this.setState({ search: e.target.value })} />
          )}
          <div
            onClick={this.calendar}
            className={calendarSearch === true ? "hidden" : "glass"}
          >
            <img onClick={this.calendar} src={dateRange} alt='' />
          </div>
          <div
            onClick={this.searchFilter}
            className={calendarSearch === true ? "cal" : "hidden"}
          >
            <img onClick={this.searchFilter} src={MagGlass} alt='' />
          </div>
        </div>
        <div id='title-count'>
          <h2>Results: {filterEmails.length}mail(s)</h2>
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
