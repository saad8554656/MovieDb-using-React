import * as React from "react";
import { Container, Grid, CardActionArea } from "@mui/material";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Showresult from "./Showresult";
import useFetchapi from "../customHooks/useFetchapi";

export default function Popular() {
  const navigate = useNavigate();

  const apiPath = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`;
  var ans = useFetchapi(apiPath);

  const handleCardClick = (movieId) => {
    navigate(`/Upcoming/MovieDetails/${movieId}`);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          {ans &&
            ans.length > 0 &&
            ans.map(
              ({ id, original_title, vote_average, poster_path, overview }) => (
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
                        image={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
              )
            )}
        </Grid>
      </Container>

      <Showresult moviedata={ans} />
      <Outlet />
    </>
  );
}
