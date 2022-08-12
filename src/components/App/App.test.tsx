import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

function mountComponent() {
  return render(<App />);
}

test("renders About", () => {
  mountComponent();
  expect(screen.getByText("About")).toBeTruthy();
});
