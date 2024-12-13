import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, Box } from "@mui/material";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    const fetchCredits = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_APIKEY}`
      );
      const data = await response.json();
      setCredits(data);
    };

    fetchCredits();
  }, [id]);

  if (!movie) {
    return (
      <Container>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          textAlign="center"
          gutterBottom
        >
          Movie not found!
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={4}>

          <Grid item xs={12} md={4}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
              }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Box>
              <Typography
                component="h2"
                variant="h2"
                textAlign="center"
                gutterBottom
              >
                {movie.original_title}
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                textAlign="center"
                gutterBottom
              >
                Rating: {movie.vote_average}/10
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                fontSize="20px"
              >
                {movie.overview}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {credits && credits.cast && (
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography variant="h3" borderBottom="3px solid #112D32" textAlign="center" gutterBottom>
            Cast
          </Typography>
          <Grid container spacing={2}>
            {credits.cast.slice(0, 12).map((castMember) => (
              <Grid item xs={6} md={3} key={castMember.cast_id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: 150,
                      height: 225,
                      borderRadius: 1,
                      boxShadow: 2,
                      objectFit: "cover",
                    }}
                    src={
                         `https://image.tmdb.org/t/p/w200${castMember.profile_path}`
                    }
                    alt={castMember.name}
                  />
                  <Box textAlign="center">
                    <Typography variant="body1">
                      {castMember.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      as {castMember.character}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}
