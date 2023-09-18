import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("Test", () => {
  it("renders without errors", () => {
    render(<App />);
    const txtcontent = screen.getByTestId("element").textContent;
    expect(txtcontent).toBe("Click on the Vite and React logos to learn more");
  });
});
