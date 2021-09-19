import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Sortemails from "../SortEmails";

it("renders properly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Sortemails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
