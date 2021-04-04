import Head from 'next/head';

interface MetadataProps {
    title: string
}

const Metadata = ({title}: MetadataProps) => {
    return (
        <Head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />

            <meta charSet={"utf-8"}/>
            <meta name={"viewport"} content={"width=device-width, initial-scale=1, shrink-to-fit=no"}/>

            <title>{title}</title>
        </Head>
    )
}

export default Metadata;