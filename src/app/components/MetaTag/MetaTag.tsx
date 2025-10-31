import Head from "next/head";

interface MetaTagProps {
  page_title: string;
  og_title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

const MetaTag = ({
  page_title,
  og_title,
  description,
  image,
}: MetaTagProps) => {
  return (
    <Head>
      <title>{page_title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={og_title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="nuSoft" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default MetaTag;
