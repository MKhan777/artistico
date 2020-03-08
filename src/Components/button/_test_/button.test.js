//some test cases for button
//import packages
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "../button";
import { render } from "@testing-library/react";
//import "jest-dom/extended-expect";

//check if button renders without crashing
it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("render button correctly", () => {
  const { getByTestId } = render(<Button label="click me Please"></Button>);
  expect(getByTestId("button")).toHaveTextContent("click me Please");
});
