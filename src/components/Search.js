import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchapi from "../customfunction/fetchapi";
import Showresult from "./Showresult";

export default function Search() {
  var result = useParams();
  console.log(result);

  var [data, setData] = useState([]);

  useEffect(() => {
    var apiPath = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${result.txtrecord}&page=1`;

    fetchapi(apiPath).then((val) => {
      console.log(val.results);
      setData(val.results);
    });
  }, [result.txtrecord]);

  return <Showresult moviedata={data} />;
}
