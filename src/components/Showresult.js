import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchapi from "../customfunction/fetchapi";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Search() {
  const result = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiPath = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${result.txtrecord}&page=1`;

    fetchapi(apiPath)
      .then((val) => {
        console.log(val.results);
        setData(val.results);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [result.txtrecord]);

  const handleCardClick = (movieId) => {
    navigate(`/Upcoming/MovieDetails/${movieId}`);
  };
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Grid container spacing={5}>
        {data && data.length > 0 ? (
          data.map(({ id, original_title, vote_average, poster_path }) => (
            <Grid item md={3} key={id}>
              <Card
                sx={{
                  bgcolor: "#112D32",
                  color: "white",
                  maxWidth: 345,
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardActionArea onClick={() => handleCardClick(id)}>
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"
                    }
                    alt={original_title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign="center"
                    >
                      {original_title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="white"
                      textAlign="center"
                    >
                      Rating: {vote_average}/10
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="white">
            No results found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}
