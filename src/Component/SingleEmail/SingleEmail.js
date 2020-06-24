import React, { Component } from "react";
import data from "../../data/email-archives.json";
class EmailWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SpecEmail: data.emails
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        {this.props.mail.sender}
        {this.props.mail.recipient}
        {this.props.mail.info}
        {this.props.mail.subject}
      </div>
    );
  }
}

export default EmailWindow;
