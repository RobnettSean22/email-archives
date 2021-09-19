// import React from "react";
// import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import Emails from "../Emails";
// import MockEmailLayout from "../../EmailLayout/EmailLayout";

// // import { render } from "@testing-library/react";

// let container = null;

// // const mockData = [
// //   {
// //     sender: "aaa@example.com",
// //     recipient: "zzz@example.com",
// //     subject: "[HR-888] Notice of official announcment",
// //     info: "airrem ipsum dolor sit amet, eligendi delicatissimi cum cu. Sed viris dolorum elaboraret ne, pro ne nihil quando semper.",
// //     attachment: false,
// //     date: "2020/06/25",
// //   },
// //   {
// //     sender: "aaa@example.com",
// //     recipient: "zzz@example.com",
// //     subject: "[HR-888] Notice of official announcment",
// //     info: "airrem ipsum dolor sit amet, eligendi ",
// //     attachment: false,
// //     date: "2021/07/25",
// //   },
// //   {
// //     sender: "aaa@example.com",
// //     recipient: "zzz@example.com",
// //     subject: "[HR-888] Notice of official announcment",
// //     info: "airrem ipsum dolor sit amet, eligendi delicatissimi cum cu.",
// //     attachment: false,
// //     date: "2021/09/16",
// //   },
// // ];

// jest.mock("../../EmailLayout/EmailLayout", () => {
//   return function DummyEmailLayout(props) {
//     return (
//       <div data-testid='map'>
//         {props.center.lat}:{props.center.long}
//       </div>
//     );
//   };
// });
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });
// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Emails />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// //unit---------------------

// it("it passes props renders emaillayout component  ", () => {
//   let mockStartDate = 2022 / 01 / 30;
//   let mockEndDate = 2021 / 01 / 30;

//   const mockFiltered = mockData.filter((mockMail) => {
//     const formatDate = new Date.date();

//     if (mockStartDate && mockEndDate !== null) {
//       return formatDate >= mockStartDate._d && formatDate <= mockEndDate._d;
//     } else if (mockStartDate && mockEndDate === null) {
//       return mockMail.date.toLowerCase().indexOf(search.toLowerCase()) !== -1;
//     }
//   });

//   act(() => {
//     render(
//       <EmailLayout
//         emailSingle='true'
//         emailNewArchives={mockFiltered}
//         passmockStartDate={mockStartDate}
//         passmockEndDate={mockEndDate}
//         passFilterEmails={filterEmails}
//         passSearch=''
//         passToSingleEmail={false}
//         passEmailBody={this.mockHandleEmailBody}
//         passEmailIndex={emailIndex}
//         sortFrom={this.handleSortFrom}
//         sortTo={this.handleSortTo}
//         sortDate={this.handleSortDate}
//         sortSubject={this.handleSortSubject}
//       />,
//       container
//     );
//   });
//   expect(wrapper.props);
// });
