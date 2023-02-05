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
  const [config, configSet] = useState({})
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/configuration?api_key=16cc70f7d227cb386a0c1630e98fb189'
    )
      .then((res) => res.json())
      .then((data) => configSet(data));
  }, []);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=16cc70f7d227cb386a0c1630e98fb189&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((data) => moviesSet(data));
  }, []);

  return (
    <SimpleGrid columns={2} spacing={10}>
      {Object.keys(config).length > 0 && movies?.results ? (
        movies.results.map((movie) => {
          return (
            <Card>
              <Image src={`${config.images.base_url}${config.images.poster_sizes[0]}/${movie.poster_path}`} />
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
