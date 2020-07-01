# Process and Challenges

## Email Archive

Below you will find descriptions and examples explaining code bits that make up the application In here you will also find links to a some of the sites that I utilized to solve several problems and to come up with a some ideas for improvements to the code its self. This security email archive uses React, Javascript, and [Date Picker](https://reactdatepicker.com/). The user can select a date range, click on any of the emails that were where sent or or received within the specified ranges. The user is able to cycle through the emails that came up with in the search and view the contents of several emails at the same time.

## **Table of Contents**

- [Filter](#Filter)
- [Date Display](#Date-Display)
- [Sort](#Sort)
- [Email Attachments](#Email-Attachments)
- [Single Email](#SingleEmail-Component)
- [Multiple Email Bodies](#Multiple-Email-Bodies)

## Layout

To ease media query adjustments the layout uses Flex Box and percentages for sizing properties. Had a few issues adjusting the [React Date Picker](https://reactdatepicker.com/). Unfortunately I was unable to adjust the calendar color to coincide with the theme of the application. I’m sure there is a way to do so but I wasn’t to worried about it since it still flows well. Besides white and cream can go with any color.

## Date Display

Working with the date and its display didn't take me as much time as I thought, using new Date and [moment()](https://momentjs.com/) assisted me in making it happen. To display the Dates in three different formats I used a ternary and getFullYear(), new Date, moment().format() and moment().startDate() for the returns.

## Filter

For the filter I initially attempted to implement two types of filters one using dates and another by text. I did run into a few issues because I was trying to place it with in the same function. So I just stuck with the date picker. To be honest I probably could just make another component with the separate filter and allow the user to toggle between the two. For [React Date Picker](https://reactdatepicker.com/) component to work successfully a condition is in place to allow the user to type in a date with out the breaking the code.

## Sort

Like most email archives, I sorted the data by date upon initial render. The user can choose to sort by email, subject, and back to date if they wish to.

## Email Attachments

For the view of the attachments icon I set up some of the data with in the json file with a boolean. If it is true, then it will displays the icon if it is false, then it will display nothing. Of course, that is just for this task, but it depends on how the actual data is set up on the back end. Definitely will try it after this is turned in for the fun of it.

## SingleEmail Component

The component for a selected email view was created for the flow of the application. This component only will display the emails that are available in the search results. Housed within it is the option to toggle through the emails that were retrieved from the search results and the ability to view multiple emails at a time.

## Multiple Email Bodies

This was definitely the trickiest part of this project since I decided to go with the React framework. I tried a couple methods to get this work, like [React Popout](https://github.com/JakeGinnivan/react-popout) and [React NewWindow](https://github.com/rmariuzzo/react-new-window) later down the road they could be really useful but they didn't work they way I was hoping they would for this project. To view multiple emails at a time I used [window.open().write()](https://reactdatepicker.com/) to create a window housing the info passed to it in HTML outside of the ReactDom. This way the data that is passed into it is unchanged. The randomization function makes sure a new window will open and the one that is already open will not repopulate with the newly selected email's content. The icon that launches this feature was created using XD and the arrow icons from the file that was given. A user can do this as many times as they wish. Whether it be the same email or a different one, a new external window will open and populate with the contents of the email selected.
