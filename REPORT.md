# Process and Challenges

## Layout

-resarched on gmail and yahoo mail to see how the funtioned

-rvised code to clean up unesscicary bits of code (multiple times)

-researseach moment() and new date and get date for date display

-responsive design for two screen sizes

I learned alot from this task. Well to be honest I learn alot from everything I work on. There were a few things I decided to look up before I began. And although I use gmail and yahoo mail on the regular, I never payed attension to their structures and thought about how they actually function. (Normal behavior from a user)

Below you will find descriptions and examples explaining code bits that make up the application In here you will also find links to a some of the sites that I utilized to solve several problems and to come up with a some ideas for improvements to the code its self. This security email archive uses React, Javascript, and Date Picker. The user can select a date range, click on any of the emails that show up with in that range to view the the email and its contents. You can also cycle thorugh the emails that have came up with in the search. There is a dimond shaped icon to the located in the SingleEmails compnent near the top right of the screen. When this icon is clicked as external window out side of react will populate with the specified emails contents. You can do this as many times as you like with the same or a differnt email and it a new external window will open and populate with the content of the email selected. I guessing you dont want to read the whole report so the links below will take you to the sections you are interested in.

to ease media query adjustments Coded the layout utilizing Flex Box and percentages for sizeing properties. Had afew issues adjustiing the React Date Picker import. Unnfortunatley I was unable to adjust the calender color to concide with the theme of the application. Im sure there is a way though but I wasnt to worried about it since works with the color cordination. (white and cream can go with all)
modile view

filter
For the filter I initialy attempted to implement two types of filters one using dates and another utilizing search by text. I did run into a few issues because I was trying to place it with in the same function. So I just stuck with the date picker. To be honest simple making another component and give the option to toggle between the two. To get the Imported Date Picker component to work properly I implemented an optional condition inorder to allow the user to type in a date with out the breaking the code.

sort
Like most email archives, I sorted the data by date on render. There are funtions allowing the user to sort by email, subject, and back to date.

attachements view
for the view of the attachments I set up some of the data with in the json file with a boolen. If it is true then it will display the icon If it is false the it will display nothing.

single view component
The component for single selected email view was created for the flow of the application. This component only will display the emails that have are availible in the search results.

multiple email view
This was definetly the trickest part of this project since I decied to go with the React framework. I tried a couple methods to get this work, like React Popout and React NewWindow later down the road they could be really use full but they didn't work they way I was hoping they would for this project. So I went with the old school method. To view multiple emails at a time I used window open to create a pure HTML window outside of the ReactDom. That way when the data is passed into it it is unchanged. I also made the used a randomization method to so when a new window is already open then it will repopulate with the newly selected email. Instead a new window will open with the information froom the specified email. The icon that initaits this feature was created using XD and the arrow icons from the file that was given.

date
Working with how the date displayed didnt take me as much time as I thought and I learned alot of information about dealing with Dates and moment(). To display the Dates in three diferent formats I gave three differnt conditions.
