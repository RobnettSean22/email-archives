import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import MagGlass from "../../Assets/icon_search.svg";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./DatePicker.scss";
import "./DateSearch.scss";

class DateSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.searchStartDate,
      endDate: this.props.searchEndDate,
    };
  }
  render() {
    return (
      <div id='search'>
        <div className='filter-date'>
          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
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
    );
  }
}
export default DateSearch;
