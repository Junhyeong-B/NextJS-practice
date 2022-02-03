import { useRouter } from "next/router";
import { useEffect } from "react";

type MovieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export default function Detail() {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const response = await (
        await fetch(`/api/movies/${router.query.id}`)
      ).json();
      console.log(response);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
