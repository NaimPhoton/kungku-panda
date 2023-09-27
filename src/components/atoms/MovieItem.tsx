import { CSSProperties, FC } from "react";
import { useDispatch } from "react-redux"
import  setPageTitle  from "../../redux/actions"

const movieItemStyle = (selected?: boolean): CSSProperties => {
  return {
    backgroundColor: selected ? "#a9b3c4" : "#ececec",
    fontWeight: selected ? "bold" : "normal",
    cursor: "pointer",
    paddingLeft: "0.75em",
    paddingRight: "0.75em",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    color: "#1a1a1a"
  };
};

export type MovieItemProps = {
  id: string;
  title: string;
  selected?: boolean;
  setSelectedMovieId?: any;
};

const MovieItem: FC<MovieItemProps> = ({
  id,
  title,
  selected,
  setSelectedMovieId
}) => {
    const dispatch = useDispatch()
    const onMoviewSelected = () => {
        setSelectedMovieId(id)
        dispatch(
            setPageTitle.setPageTitle(title)
        )
    }
  return (
    <div
      style={movieItemStyle(selected)}
      onClick={() => onMoviewSelected()}
    >
      {title}
    </div>
  );
};

export default MovieItem;
