import React from "react";
import { render } from "@testing-library/react";
import MovieLabel, { MovieLabelProps } from "../../../components/atoms/MovieLabel";

describe("MovieLabel Component", () => {
  const defaultProps: MovieLabelProps = {
    title: "Test Movie Title",
    year: "2022",
  };

  it("renders with the correct title and year", () => {
    const { getByText } = render(<MovieLabel {...defaultProps} />);

    // Assert that the component renders with the correct title and year
    expect(getByText(`${defaultProps.title} (${defaultProps.year})`)).toBeInTheDocument();
  });
});
