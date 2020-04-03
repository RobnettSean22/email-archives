import React, { Component } from "react";

import data from "./data/email-archives.json";
import Clip from "./Assets/icon_clip.svg";
import dateRange from "./Assets/icon_calender.svg";
import MagGlass from "./Assets/icon_search.svg";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      archives: data.emails,
      calendarSearch: true,
      startDate: "",
      endDate: ""
    };
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
    const dateed = new Date("2001-03-24");
    const dates = new Date("04/24/2001");

    const filterEmails = archives
      .filter(mail => {
        const formatDate = new Date(mail.date).toString();
        const startFormat = new Date(startDate).toString();
        const endFormat = new Date(endDate).toString();
        console.log(7777, startFormat, endFormat, formatDate);
        return formatDate >= startFormat && formatDate <= endFormat;
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
            <div className='filter-date'>
              <input
                value={startDate}
                placeholder='YYYY/MM/DD'
                onChange={e =>
                  this.setState({
                    startDate: e.target.value
                  })
                }
              />
              <h2>-</h2>
              <input
                value={endDate}
                placeholder='YYYY/MM/DD'
                onChange={e =>
                  this.setState({
                    endDate: e.target.value
                  })
                }
              />
            </div>
          ) : (
            <input
              value={search}
              onChange={e => this.setState({ search: e.target.value })}
            />
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
