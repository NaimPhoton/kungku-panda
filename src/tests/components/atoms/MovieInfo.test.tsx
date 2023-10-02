import React from "react";
import { render } from "@testing-library/react";
import MovieInfo, { MovieInfoProps } from "../../../components/atoms/MovieInfo";

describe("MovieInfo Component", () => {
  const defaultProps: MovieInfoProps = {
    label: "Test Label",
    value: "Test Value",
  };

  it("renders with the correct label and value", () => {
    const { getByText } = render(<MovieInfo {...defaultProps} />);

    // Assert that the component renders with the correct label and value
    expect(getByText(`${defaultProps.label}:`)).toBeInTheDocument();
    expect(getByText(defaultProps.value)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<MovieInfo {...defaultProps} />);

    // Snapshot testing to ensure component structure remains consistent
    expect(asFragment()).toMatchSnapshot();
  });
});
