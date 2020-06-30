# Process and Challenges

## Layout

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
reactrouter pop out
date

-resarched on gmail and yahoo mail to see how the funtioned

-rvised code to clean up unesscicary bits of code (multiple times)

-researseach moment() and new date and get date for date display

-responsive design for two screen sizes
