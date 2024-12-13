import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Popular from "./Popular";
import Toprated from "./Top-rated";
import Upcoming from "./Upcoming";
import Pagenotfound from "./Pagenotfound";
import MovieDetails from "./Moviedetails";
import Search from "./Search";

const movieRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Popular />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
      {
        path: "popular/MovieDetails/:id",
        element: <MovieDetails />,
      },
      {
        path: "toprated",
        element: <Toprated />,
      },
      {
        path: "toprated/MovieDetails/:id",
        element: <MovieDetails />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
      {
        path: "search-data/:txtrecord",
        element: <Search />,
      },
      {
        path: "upcoming/MovieDetails/:id",
        element: <MovieDetails />,
      },
      {
        path: "*",
        element: <Pagenotfound />,
      },
    ],
  },
]);

export default movieRouter;
