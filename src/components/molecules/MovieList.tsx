import { CSSProperties, FC } from "react";
import MovieItem, { MovieItemProps } from "../atoms/MovieItem";

const movieListStyles: CSSProperties = {
  backgroundColor: "#ececec",
  height: "100%",
  paddingTop: "1em",
  width: "100%",
  display: "flex",
  flexDirection: "column"
};

export type MovieListProps = {
  movieItemList: Omit<MovieItemProps, "onItemClicked">[];
  selectedMovieId: string;
  setSelectedMovieId: any;
};

const MovieList: FC<MovieListProps> = ({
  movieItemList,
  selectedMovieId,
  setSelectedMovieId
}) => {
  return (
    <div style={movieListStyles}>
      {movieItemList.map(({ id, title }) => {
        return (
          <MovieItem
            key={id}
            id={id}
            title={title}
            selected={id === selectedMovieId}
            setSelectedMovieId={setSelectedMovieId}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
