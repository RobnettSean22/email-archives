import React, { Component, useState, useEffect } from "react";
import { DateRangePicker } from "react-dates";
import SingleEmail from "../SingleEmail/SingleEmail";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./DatePicker.scss";
import "./Emails.scss";
import moment from "moment";
import data from "../../data/email-archives.json";
import Clip from "../../Assets/icon_clip.svg";
import MagGlass from "../../Assets/icon_search.svg";
import Up from "../../Assets/icon_arrow01.svg";
import Right from "../../Assets/icon_arrow02.svg";
import Mail from "../../Assets/icon_mail_sp.svg";

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
      from: true,
      to: false,
      subject: false,
      date: false,
    };
    this.toggleForward = this.toggleForward.bind(this);
  }
  /** 
   const [setArchives, archives] = useState(data.emails)
   const [setSearch, search] = useState("")
   const [setSingle, single] = true
   const [setEmailIndex, emailIndex] = null
   const [setCalendarSearch, calenderSearch] = useState(true)
   const [setStartDate, startDate] = useState(moment()startOf('month'))
   const [setEndDate, endDate] = useState(moment().endOf('month'))
   const [setFrom, from] = useState(true)
   const [setTo, to] = useState(false)
   const [setSubject, subject] = useState(false)
   const [setDate, date] = useState(false)
   */
  componentDidMount() {
    this.focusDate();
  }

  // useEffect(() => {
  //   focusDate();
  // }, []);

  focusFrom = () => {
    this.setState({
      from: true,
      to: false,
      subject: false,
      date: false,
      archives: this.state.archives.sort((a, b) => {
        const abc = this.state.from ? -1 : 1;
        return abc * b.recipient.localeCompare(a.recipient.toLowerCase());
      }),
    });
  };
  focusTo = () => {
    /** 
     
     setFrom(false)
     setTo(true)
     setSubject(false)
     setDate(false)
     setArchives(
     archives.sort((a, b) => {
        const abc = from ? -1 : 1;
        return abc * b.sender.localeCompare(a.sender.toLowerCase());
      })
     )
     
     */
    this.setState({
      from: false,
      to: true,
      subject: false,
      date: false,
      archives: this.state.archives.sort((a, b) => {
        const abc = this.state.from ? -1 : 1;
        return abc * b.sender.localeCompare(a.sender.toLowerCase());
      }),
    });
  };
  focusSubject = () => {
    /** 
     
     setFrom(false)
     setTo(true)
     setSubject(false)
     setDate(false)
     setArchives(
     archives.sort((a, b) => {
        const abc = from ? -1 : 1;
        return abc * b.subject.localeCompare(a.subject.toLowerCase());
      })
     )
     
     */

    this.setState({
      from: false,
      to: false,
      subject: true,
      date: false,
      archives: this.state.archives.sort((a, b) => {
        const abc = this.state.from ? -1 : 1;
        return abc * b.subject.localeCompare(a.subject.toLowerCase());
      }),
    });
  };
  focusDate = () => {
    /** 
     
     setFrom(false)
     setTo(true)
     setSubject(false)
     setDate(false)
     setArchives(
     archives.sort((a, b) => {
        return b.date.localeCompare(a.date);
      })
     )
     
     */

    this.setState({
      from: false,
      to: false,
      subject: false,
      date: true,
      archives: this.state.archives.sort((a, b) => {
        return b.date.localeCompare(a.date);
      }),
    });
  };

  toSingleEmail = (index) => {
    /**
    setSingle(false)
    setEmailIndex(index)
 */

    this.setState({ single: false, emailIndex: index });
  };
  toggleForward = (length) => {
    /** if (emailIndex === length - 1) {
        setEmailIndex(0)
    
       } else {
        setEmailIndex(emailIndex + 1)
      
     }
    */

    if (this.state.emailIndex === length - 1) {
      this.setState({
        emailIndex: 0,
      });
    } else {
      this.setState({
        emailIndex: this.state.emailIndex + 1,
      });
    }
  };
  toggleBack = (length) => {
    //   if (this.state.emailIndex === 0) {

    //       emailIndex(length - 1)

    //   } else {

    //       emailIndex(emailIndex - 1)

    //   }
    // };
    if (this.state.emailIndex === 0) {
      this.setState({
        emailIndex: length - 1,
      });
    } else {
      this.setState({
        emailIndex: this.state.emailIndex - 1,
      });
    }
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
    // setSingle(true);
    this.setState({
      single: true,
    });
  };

  msToTime = (duration) => {
    let ms = duration.getTime();
    var milliseconds = parseInt((ms % 1000) / 100),
      seconds = parseInt((ms / 1000) % 60),
      minutes = parseInt((ms / (1000 * 60)) % 60),
      hours = parseInt((ms / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes;
  };
  render() {
    const {
      archives,
      emailIndex,
      search,
      single,
      startDate,
      endDate,
      from,
      to,
      subject,
      date,
    } = this.state;

    const filterEmails = archives
      .filter((mail) => {
        const formatDate = new Date(mail.date);

        if (startDate && endDate !== null) {
          return formatDate >= startDate._d && formatDate <= endDate._d;
        } else if (startDate && endDate === null) {
          return mail.date.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        }
      })

      .map((emails, i) => {
        const getIndex = emails.sender.substring(16);
        const toFit =
          emails.sender.length > 15
            ? emails.sender.replace(getIndex, "...")
            : emails.sender;

        const stringDate = new Date(emails.date);
        const dateDisplay =
          stringDate.toDateString() ===
          moment().startOf("day")._d.toDateString()
            ? this.msToTime(stringDate)
            : stringDate.getFullYear() !== +moment().format("YYYY")
            ? emails.date
            : stringDate.toDateString().slice(4, 11);
        console.log(
          stringDate.toDateString().slice(4, 11),
          moment().startOf("day")._d.toDateString()
        );
        return (
          <div
            className='mail-list'
            key={i}
            /* onClick={(e) => toSingleEmail(i)} */
            onClick={(e) => this.toSingleEmail(i)}
          >
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
                {dateDisplay}
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
                    <h3>{dateDisplay}</h3>
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
          <div className='filter-date'>
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              onDatesChange={({ startDate, endDate }) =>
                /**
                 
                setStartDate(startDate)
                setEndDate(endDate) 
               
               */
                this.setState({ startDate, endDate })
              }
              // look into this check before converting. it might be apart of the packeage
              /**
               focusedInput={focusedInput}
              onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
              */
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
        <div id='email'>
          <div id={single ? "mail-order" : "non-exgsistant"}>
            <div id='from'>
              {/* <h2 onClick={focusFrom}>From</h2> */}
              <h2 onClick={this.focusFrom}>From</h2>
              <div>
                <img
                  className={from === true ? "show-arrow" : "hide-arrow"}
                  src={Up}
                  alt=''
                />
              </div>
            </div>
            <div id='to'>
              {/* <h2 onClick={focusTo}>To</h2> */}
              <h2 onClick={this.focusTo}>To</h2>
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
              {/* <h2 onClick={focusSubject}>Subject</h2> */}
              <h2 onClick={this.focusSubject}>Subject</h2>
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
              {/* <h2 onClick={focusDate}>Date</h2> */}
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
          {single ? (
            <div id='mail-content'>{filterEmails}</div>
          ) : (
            <SingleEmail
              mail={archives}
              specIndex={emailIndex}
              /**  
                back={this.toggleBack}
                forward={this.toggleForward}
                emailWindow={this.emailBody}
             */
              back={this.toggleBack}
              forward={this.toggleForward}
              emailWindow={this.emailBody}
              toggleEnd={filterEmails.length}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Emails;
