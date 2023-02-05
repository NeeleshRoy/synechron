import {
  SimpleGrid,
  Spinner,
  Card,
  CardBody,
  Text,
  Image,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, moviesSet] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/configuration?api_key=16cc70f7d227cb386a0c1630e98fb189'
    )
      .then((res) => res.json())
      .then((data) => moviesSet(data));
  });
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=16cc70f7d227cb386a0c1630e98fb189&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((data) => moviesSet(data));
  }, []);

  return (
    <SimpleGrid columns={2} spacing={10}>
      {movies?.results ? (
        movies.results.map((movie) => {
          return (
            <Card>
              <Image src={movie.poster_path} width="150px" />
              <CardBody>
                <Text>{movie.title}</Text>
              </CardBody>
            </Card>
          );
        })
      ) : (
        <Spinner />
      )}
    </SimpleGrid>
  );
};

export default Movies;
