import React from "react";
import { render } from "@testing-library/react";
import MoviePoster, { MoviePosterProps } from "../../../components/atoms/MoviePoster";

describe("MoviePoster Component", () => {
  const defaultProps: MoviePosterProps = {
    movieTitle: "Test Movie",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  };

  it("renders with the correct alt text and image source", () => {
    const { getByAltText } = render(<MoviePoster {...defaultProps} />);

    // Assert that the component renders with the correct alt text
    expect(getByAltText(defaultProps.movieTitle)).toBeInTheDocument();

    // Assert that the component renders with the correct image source
    expect(
      getByAltText(defaultProps.movieTitle).getAttribute("src")
    ).toBe(defaultProps.posterUrl);
  });

  it("applies the correct style properties", () => {
    const { getByAltText } = render(<MoviePoster {...defaultProps} />);

    // Assert that the component renders with the correct style properties
    const moviePosterElement = getByAltText(defaultProps.movieTitle);
    expect(moviePosterElement).toHaveStyle({
      borderRadius: "5%",
      maxWidth: "48vh",
      maxHeight: "60vh",
      width: "auto",
      height: "auto",
    });
  });
});
