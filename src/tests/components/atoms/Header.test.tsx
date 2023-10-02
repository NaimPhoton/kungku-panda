import React from "react";
import { render } from "@testing-library/react";
import Header from "../../../components/atoms/Header";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Header Component", () => {
  it("renders with the correct title", () => {
    const pageTitle = "Movie Catalogue";

    // Mock the useSelector function
    (useSelector as jest.Mock).mockReturnValue(pageTitle);

    // Render the Header component
    const { getByText } = render(<Header />);

    // Assert that the component renders with the correct title
    expect(getByText(`🎥 ${pageTitle}`)).toBeInTheDocument();
  });
});
