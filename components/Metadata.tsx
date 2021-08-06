import Head from "next/head";

interface MetadataProps {
    title: string
}

const Metadata = ({ title }: MetadataProps) => {
    return (
        <Head>
            <meta charSet={"utf-8"}/>
            <meta name={"viewport"} content={"width=device-width, initial-scale=1, shrink-to-fit=no"}/>
            <meta name={"description"} content={"Deyby Rodriguez's Personal Website. Full-Stack Web Developer"}/>
            <meta name={"keywords"} content={"Deyby, Rodriguez, Antony, deybyr647, Web Developer, JavaScript, ReactJS, NodeJS, NextJS"}/>
            <meta name={"author"} content={"Deyby Rodriguez"}/>
            <meta name={"robots"} content={"index, follow"}/>

            <meta property={"og:title"} content={"Deyby Rodriguez"}/>
            <meta property={"og:type"} content={"website"}/>
            <meta property={"og:image"} content={"%PUBLIC_URL%/opengraph.png"}/>
            <meta property={"og:url"} content={"https://deybyr647.com"}/>
            <meta property={"og:description"} content={"Deyby Rodriguez's Personal Website"}/>

            <title>{ title }</title>
        </Head>
    )
}

export default Metadata;