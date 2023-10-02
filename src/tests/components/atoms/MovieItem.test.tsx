import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import MovieItem, { MovieItemProps } from "../../../components/atoms/MovieItem";
import  setPageTitle  from "../../../redux/actions"

// Mock the useDispatch function
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("MovieItem Component", () => {
  const defaultProps: MovieItemProps = {
    id: "1",
    title: "Test Movie",
    selected: false,
    setSelectedMovieId: jest.fn(),
  };

  it("renders with the correct title", () => {
    const { getByText } = render(<MovieItem {...defaultProps} />);

    // Assert that the component renders with the correct title
    expect(getByText(defaultProps.title)).toBeInTheDocument();
  });

  it("triggers setSelectedMovieId and dispatches setPageTitle on click", () => {
    // Create a mock dispatch function
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { getByText } = render(<MovieItem {...defaultProps} />);

    // Simulate a click event on the component
    fireEvent.click(getByText(defaultProps.title));

    // Expect setSelectedMovieId to be called with the correct id
    expect(defaultProps.setSelectedMovieId).toHaveBeenCalledWith(defaultProps.id);

    // Expect dispatch to be called with the setPageTitle action
    expect(mockDispatch).toHaveBeenCalledWith(
      setPageTitle.setPageTitle(defaultProps.title)
    );
  });

  it("applies selected styles when selected prop is true", () => {
    const { getByText } = render(<MovieItem {...defaultProps} selected={true} />);

    // Assert that the component renders with the selected styles
    const movieItemElement = getByText(defaultProps.title);
    expect(movieItemElement).toHaveStyle({
      backgroundColor: "#a9b3c4",
      fontWeight: "bold",
    });
  });
});

