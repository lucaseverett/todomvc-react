import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("Clear completed button should be displayed", () => {
    render(<Footer {...{ completedCount: 1 }} />);
    expect(screen.getByText("Clear completed")).toBeInTheDocument();
  });

  it("Clear completed button should NOT be displayed", () => {
    render(<Footer {...{ completedCount: 0 }} />);
    expect(screen.queryByText("Clear completed")).not.toBeInTheDocument();
  });

  it("'All' should be selected", () => {
    render(<Footer {...{ hash: "all" }} />);
    expect(screen.getByText("All")).toHaveClass("selected");
  });

  it("'Active' should be selected", () => {
    render(<Footer {...{ hash: "active" }} />);
    expect(screen.getByText("Active")).toHaveClass("selected");
  });

  it("'Completed' should be selected", () => {
    render(<Footer {...{ hash: "completed" }} />);
    expect(screen.getByText("Completed")).toHaveClass("selected");
  });

  it("Nothing should be selected", () => {
    render(<Footer />);
    expect(screen.getByText("All")).not.toHaveClass("selected");
    expect(screen.getByText("Active")).not.toHaveClass("selected");
    expect(screen.getByText("Completed")).not.toHaveClass("selected");
  });
});
