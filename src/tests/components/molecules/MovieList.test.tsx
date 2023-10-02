import React from "react";
import { render } from "@testing-library/react";
import MovieItem from "../../../components/atoms/MovieItem";

export type MovieItemProps = {
    id: string;
    title: string;
    selected?: boolean;
    setSelectedMovieId?: any;
  };

type MovieListProps = {
    movieItemList: Omit<MovieItemProps, "onItemClicked">[];
    selectedMovieId: string;
    setSelectedMovieId: any;
  };

// Mock the MovieItem component
jest.mock("../../../components/atoms/MovieItem", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe.skip("MovieList Component", () => {
  const defaultProps: MovieListProps = {
    movieItemList: [
      { id: "1", title: "Movie 1" },
      { id: "2", title: "Movie 2" },
    ],
    selectedMovieId: "1",
    setSelectedMovieId: jest.fn(),
  };

  beforeEach(() => {
    (MovieItem as jest.Mock).mockClear();
  });

  it("renders MovieItem components with the correct props", () => {
    render(<MovieItem id={""} title={""} {...defaultProps} />);

    // Assert that MovieItem components are rendered with the correct props
    // expect(MovieItem).toHaveBeenCalledTimes(defaultProps.movieItemList.length);

    // Check if MovieItem was called with the correct props for each item in movieItemList
    defaultProps.movieItemList.forEach(({ id, title }) => {
      expect(MovieItem).toHaveBeenCalledWith(
        expect.objectContaining({
          id,
          title,
          selected: id === defaultProps.selectedMovieId,
          setSelectedMovieId: defaultProps.setSelectedMovieId,
        })
      );
    });
  });
});
