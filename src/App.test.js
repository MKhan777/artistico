import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   const { getByAltText } = render(<App />);
//   const linkElement = getByAltText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
});
