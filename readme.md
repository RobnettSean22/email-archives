# Email Archive

## **Description**

This security email archive is an application that uses React, Javascript, and [Date Picker](https://reactdatepicker.com/). The user can select a date range, click on any of the emails that were where sent or received within the specified dates. The user is also able to cycle through the emails that came up with in the search and view the contents of several emails at the same time.

## Table of Contents

- [Filter](#Filter)
- [Date Display](#Date-Display)
- [Sort](#Sort)
- [Email Attachments](#Email-Attachments)
- [Single Email](#SingleEmail-Component)
- [Multiple Email Bodies](#Multiple-Email-Bodies)

## **Layout**

To ease media queries adjustments the layout uses Flex Box and percentages for sizing properties. For the media queries I only accounted for the mock up sizes located in the pdf. Had a few issues adjusting the [React Date Picker](https://reactdatepicker.com/). Unfortunately I was unable to adjust the calendar color to coincide with the theme of the application. I’m sure there is a way to do so but I wasn’t to worried about it since it still flows well. Besides white and cream can go with any color.

## **Date Display**

Working with the date and its display didn't take as much time as I thought, using new Date and [moment()](https://momentjs.com/) I was able to smooth out the kinks. To display the Dates in three different formats I used a ternary and getFullYear(), new Date, moment().format() and moment().startDate() for the returns.

> _Converting the date from the data in to standard time format and toDateString changes it in to month, day, and year format. (Thu Jul 2). Then, if the date does not match the current date or the current year then it will display as YYYY/MM/DD.
> _

> _Conditions:  
> YYYY/MM/DD = YYYY/MM/DD display(time)  
> YYYY = YYYY display display(Month #Day)  
> YYYY !== YYYY display(YYYY/MM/DD)_

```js
const stringDate = new Date(emails.date);
const dateDisplay =
  stringDate.toDateString() ===
  moment()
    .startOf("day")
    ._d.toDateString()
    ? this.msToTime(stringDate)
    : stringDate.getFullYear() !== +moment().format("YYYY")
    ? emails.date
    : stringDate.toDateString().slice(4, 11);
```

## **Filter**

For the filter I initially attempted to implement two types one using dates and another by text. I did run into a few issues because I was trying to place it with in the same function. So I just stuck with the date picker. To be honest I probably could just make another component with the separate filter and allow the user to toggle between the two. For the [React Date Picker](https://reactdatepicker.com/) component to work successfully a condition is in place to allow the user to type in a date with out breaking the code.

> _The "else if" is a place holder. This gives another route to allow the code to wait for the changes to the startDate varible. This to keep the format of the varible in a specific format._

```js
const filterEmails = archives.filter(mail => {
  const formatDate = new Date(mail.date);
  console.log(formatDate.toDateString().slice(4, 11));
  if (startDate && endDate !== null) {
    return formatDate >= startDate._d && formatDate <= endDate._d;
  } else if (startDate && endDate === null) {
    return mail.date.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  }
});
```

## **Sort**

> _Like most email archives, I sorted the emails by date upon initial rendering. The user can choose to sort by email, subject, and back to date if they wish to._

_**Date**_

```js
focusDate = () => {
  this.setState({
    from: false,
    to: false,
    subject: false,
    date: true,
    archives: this.state.archives.sort((a, b) => {
      return b.date.localeCompare(a.date);
    })
  });
};
```

> _Mail address/Subject sort. Same function just depends on which statement in state is true._

```js
focusSubject = () => {
  this.setState({
    from: false,
    to: false,
    subject: true,
    date: false,
    archives: this.state.archives.sort((a, b) => {
      const abc = this.state.from ? -1 : 1;
      return abc * b.subject.localeCompare(a.subject.toLowerCase());
    })
  });
};
```

## **Email Attachments**

For the view of the attachments icon I set up some of the data within the json file with a boolean. If it is true, then it will displays the icon if it is false, then it will display nothing. Of course, that is just for this task, but it depends on how the actual data is set up on the back end. Definitely will try it after this is turned in for the fun of it.

## **SingleEmail Component**

The component for a selected email view was created for the flow of the application. This component only will display the emails that are available in the search results. Housed within it, is the option to toggle through the emails that were retrieved from the search results and the ability to view multiple emails at a time.

## **Multiple Email Bodies**

This was definitely the trickiest part of this project since I decided to go with the React framework. I tried a couple methods to get this work, like [React Popout](https://github.com/JakeGinnivan/react-popout) and [React NewWindow](https://github.com/rmariuzzo/react-new-window) later down the road they could be really useful but they didn't work they way I had hoped for this project. To view multiple emails at a time I used [window.open().write()](https://reactdatepicker.com/) to create a window housing the info passed to it in HTML outside of the ReactDom. Which is examplified in the code below.

```js
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
```

> _prop peramiters passed in in Single component_

```js
<div id='new-window'>
          <div>
            <img
              src={Arrows}
              alt=''
              onClick={e =>
                props.emailWindow(
                  props.mail[toggleIndex].recipient,
                  props.mail[toggleIndex].subject,
                  props.mail[toggleIndex].info
                )
              }
            />
          </div>
```

The data that is passed into it is unchanged and the randomization function makes sure a new window will open and the one that is already open will not repopulate with the newly selected email's content. The icon that launches this feature was created using XD and the arrow icons from the file that was provided. A user can do this as many times as they wish. Whether it be the same email or a different one, a new external window will open and populate with the contents of the email selected.
