import Head from "next/head";

type SeoProps = {
  title: string;
};

export default function Seo({ title }: SeoProps): JSX.Element {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
