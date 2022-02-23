import Image from "next/image";

const Contents = ({ contents }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      This is contents
      {contents.map((result) => (
        <Image
          key={result.id}
          layout="responsive"
          src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
          height={360}
          width={640}
        />
      ))}
    </div>
  );
};

export default Contents;
