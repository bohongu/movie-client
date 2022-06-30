import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
  }
`;

const Movies = () => {
  const { data, loading } = useQuery(ALL_MOVIES);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <ul>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default Movies;
