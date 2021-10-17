import Head from "next/head";

interface MetadataProps {
  title: string;
}

const Metadata = ({ title }: MetadataProps) => {
  return (
    <Head>
      <meta charSet={"utf-8"} />
      <meta
        name={"viewport"}
        content={"width=device-width, initial-scale=1, shrink-to-fit=no"}
      />
      <meta
        name={"description"}
        content={"Deyby Rodriguez's Personal Website. Full-Stack Web Developer"}
      />
      <meta
        name={"keywords"}
        content={
          "Deyby, Rodriguez, Antony, deybyr647, Web Developer, JavaScript, ReactJS, NodeJS, NextJS"
        }
      />
      <meta name={"author"} content={"Deyby Rodriguez"} />
      <meta name={"robots"} content={"index, follow"} />

      <meta property={"og:title"} content={"Deyby Rodriguez"} />
      <meta property={"og:type"} content={"website"} />
      <meta
        property={"og:image"}
        content={"https://deybyr647.com/opengraph.png"}
      />
      <meta property={"og:image:width"} content={"1200"} />
      <meta property={"og:image:height"} content={"627"} />
      <meta property={"og:url"} content={"https://deybyr647.com"} />
      <meta
        property={"og:description"}
        content={"Deyby Rodriguez's Personal Website"}
      />
      <link rel={"canonical"} href={"https://www.deybyr647.com"} />

      <meta
        name={"twitter:title"}
        content={"Deyby Rodriguez's Personal Website"}
      />
      <meta
        name={"twitter:description"}
        content={
          "Deyby Rodriguez's online portfolio website, which includes personal projects, work experience, skills, and more"
        }
      />
      <meta
        name={"twitter:image"}
        content={"https://www.deybyr647.com/opengraph.png"}
      />
      <meta name={"twitter:site"} content={"@deybyr647"} />
      <meta name={"twitter:creator"} content={"@deybyr647"} />

      <title>{title}</title>
    </Head>
  );
};

export default Metadata;
