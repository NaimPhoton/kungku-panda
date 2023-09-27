import { FC } from "react";
import { Provider } from "react-redux";
import Header from "./components/atoms/Header";
import MovieCatalogue from "./components/organisms/MovieCatalogue";
import data from "./static/movie-data.json";
import store from "./redux/store";
// import "./styles.css";

const App: FC<{}> = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MovieCatalogue movieListData={data} />
      </div>
    </Provider>
  );
};

export default App;
