import Nav from "../components/Nav";
import Contents from "../components/Contents";

const Movies = ({ contents }) => {
  return (
    <div>
      <Nav />
      <Contents contents={contents} />
    </div>
  );
};

export default Movies;

export async function getServerSideProps(context) {
  const menu = context.query.menu;

  const BASE_URL = "https://api.themoviedb.org";
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&language=kr&with_genres=${menu}`
  );
  const data = await res.json();

  return {
    props: {
      contents: data.results,
    },
  };
}
