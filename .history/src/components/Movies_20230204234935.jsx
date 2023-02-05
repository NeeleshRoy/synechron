import React, { useEffect } from 'react';

const Movies = () => {
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=16cc70f7d227cb386a0c1630e98fb189&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Movies</div>;
};

export default Movies;
