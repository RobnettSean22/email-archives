import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./DatePicker.scss";
import "./App.scss";
import moment from "moment";
import data from "./data/email-archives.json";
import Clip from "./Assets/icon_clip.svg";
import dateRange from "./Assets/icon_calender.svg";
import MagGlass from "./Assets/icon_search.svg";
import Up from "./Assets/icon_arrow01.svg";
import Right from "./Assets/icon_arrow02.svg";
import Mail from "./Assets/icon_mail_sp.svg";
import EmailWindow from "./Component/EmailWindow";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      archives: data.emails,
      search: "",
      calendarSearch: true,
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month"),
      from: true,
      to: false,
      subject: false,
      date: false,
      showInfo: false
    };
  }
  componentDidMount() {
    this.externalWindow = window.open(
      "",
      "",
      "width=600,height=400,left=200,top=200"
    );
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

  focusFrom = () => {
    this.setState({
      from: true,
      to: false,
      subject: false,
      date: false
    });
  };
  focusTo = () => {
    this.setState({
      from: false,
      to: true,
      subject: false,
      date: false
    });
  };
  focusSubject = () => {
    this.setState({
      from: false,
      to: false,
      subject: true,
      date: false
    });
  };
  focusDate = () => {
    this.setState({
      from: false,
      to: false,
      subject: false,
      date: true
    });
  };

  sortByRecipient = () => {
    this.setState({
      archives: this.state.archives.sort((a, b) => {
        const abc = this.state.from ? -1 : 1;
        return abc * b.recipient.localeCompare(a.recipient.toLowerCase());
      })
    });
  };
  sortByRecipientReverse = () => {
    this.setState({
      archives: this.state.archives.sort((a, b) => {
        const abc = this.state.from ? -1 : 1;
        return abc * a.recipient.localeCompare(b.recipient.toLowerCase());
      })
    });
  };
  infoVisible = () => {
    this.serState({
      showInfo: true
    });
  };
  infoVisible = () => {
    this.serState({
      showInfo: false
    });
  };
  emailBodyWindow = () => {
    this.externalWindow = window.open(
      "",
      "",
      "width=600,height=400,left=200,top=200"
    );
  };

  sortBySender = () => {
    this.setState({
      archives: this.state.archives.sort((a, b) => {
        const abc = this.state.from ? -1 : 1;
        return abc * b.sender.localeCompare(a.sender.toLowerCase());
      })
    });
  };
  sortBySubject = () => {
    this.setState({
      archives: this.state.archives.sort((a, b) => {
        const abc = this.state.from ? -1 : 1;
        return abc * b.subject.localeCompare(a.subject.toLowerCase());
      })
    });
  };
  // sortByDate = () => {};

  render() {
    const {
      archives,
      search,
      calendarSearch,
      startDate,
      endDate,
      from,
      to,
      subject,
      date,
      showInfo
    } = this.state;
    console.log(archives);

    const filterEmails = archives
      .filter(mail => {
        const formatDate = new Date(mail.date);

        if (startDate && endDate !== null) {
          return formatDate >= startDate._d && formatDate <= endDate._d;
        } else if (startDate && endDate === null) {
          return (
            mail.sender.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            mail.recipient.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            mail.subject.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            mail.info.toLowerCase().indexOf(search.toLowerCase())
          );
        }
      })

      .map((emails, i) => {
        const getIndex = emails.sender.substring(16);
        const toFit =
          emails.sender.length > 15
            ? emails.sender.replace(getIndex, "...")
            : emails.sender;
        return (
          <div className='mail-list' key={i}>
            <div className='sender'>
              <h3 className={from === true ? "bolded" : "reg"}>{toFit}</h3>
            </div>
            <div className='recipient'>
              {" "}
              <h3 className={to === true ? "bolded" : "reg"}>
                {emails.recipient}
              </h3>
            </div>
            <div className='subject'>
              {" "}
              <h3 className={subject === true ? "bolded" : "reg"}>
                {emails.subject.substring(0, 54)}
              </h3>
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
              <h3 className={date === true ? "bolded" : "reg"}>
                {emails.date}
              </h3>
            </div>

            <img className='mail-icon' src={Mail} alt='' />

            <div className='mobile-sender'>
              <div className='mobilesender'>
                <h3>{emails.sender}</h3>
                <div className='mobile-date'>
                  <div
                    className={
                      emails.attachment === true ? "mobile-attach" : "hide"
                    }
                  >
                    <img src={Clip} alt='' />
                  </div>
                  <div
                    className={
                      emails.attachment === true
                        ? "mobiledate"
                        : "mobile-date-with-attachment"
                    }
                  >
                    {" "}
                    <h3>{emails.date}</h3>
                    <div>
                      <img src={Right} alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='mobile-recipient'>
                {" "}
                <h3>{emails.recipient}</h3>
              </div>
              <div className='mobile-subject'>
                {" "}
                <h3>{emails.subject}</h3>
              </div>
            </div>
          </div>
        );
      });

    return (
      <div id='archive-container'>
        <div id='search'>
          {calendarSearch === true ? (
            <div className='filter-date'>
              <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                }
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            </div>
          ) : (
            <input
              className='search-input'
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
              <h2 onClick={this.focusFrom}>From</h2>
              <div>
                <img
                  onClick={this.sortByRecipient}
                  className={from === true ? "show-arrow" : "hide-arrow"}
                  src={Up}
                  alt=''
                />
              </div>
            </div>
            <div id='to'>
              <h2 onClick={this.focusTo}>To</h2>
              <div>
                <img
                  onClick={this.sortBySender}
                  className={to === true ? "show-arrow" : "hide-arrow"}
                  src={Up}
                  alt=''
                />
              </div>
            </div>
            <div id='about'>
              {" "}
              <h2 onClick={this.focusSubject}>Subject</h2>
            </div>
            <div id='when'>
              {" "}
              <h2 onClick={this.focusDate}>Date</h2>
              <div>
                <img
                  className={date === true ? "show-arrow" : "hide-arrow"}
                  src={Up}
                  alt=''
                />
              </div>
            </div>
          </div>
          <div id='mail-content'>{filterEmails}</div>
        </div>
      </div>
    );
  }
}

export default App;
