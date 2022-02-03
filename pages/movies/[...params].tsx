import { useEffect } from "react";
import Seo from "../../components/Seo";

export default function Detail({ params }: any) {
  const title: string = params[0];
  const id: string = params[1];

  useEffect(() => {
    (async () => {
      const response = await (await fetch(`/api/movies/${id}`)).json();
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
