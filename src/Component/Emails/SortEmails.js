import React from "react";
import "./SortEmails.scss";
import Clip from "../../Assets/icon_clip.svg";
import Mail from "../../Assets/icon_mail_sp.svg";
import Right from "../../Assets/icon_arrow02.svg";
import moment from "moment";

const Sortemails = (props) => {
  const { emailArchives, sortFrom, sortTo, sortSubject, sortDate } = props;

  const msToTime = (duration) => {
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

  const mapEmails = emailArchives.map((emails, i) => {
    const getIndex = emails.sender.substring(16);
    const toFit =
      emails.sender.length > 15
        ? emails.sender.replace(getIndex, "...")
        : emails.sender;

    const stringDate = new Date(emails.date);
    const dateDisplay =
      stringDate.toDateString() === moment().startOf("day")._d.toDateString()
        ? msToTime(stringDate)
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
        onClick={(e) => props.openSingleEmail(i)}
      >
        <div className='sender'>
          <h3 className={sortFrom === true ? "bolded" : "reg"}>{toFit}</h3>
        </div>
        <div className='recipient'>
          {" "}
          <h3 className={sortTo === true ? "bolded" : "reg"}>
            {emails.recipient}
          </h3>
        </div>
        <div className='subject'>
          {" "}
          <h3 className={sortSubject === true ? "bolded" : "reg"}>
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
          <h3 className={sortDate === true ? "bolded" : "reg"}>
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
  return mapEmails;
};
export default Sortemails;
