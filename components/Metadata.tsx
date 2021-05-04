import Head from 'next/head';

interface MetadataProps {
    title: string
}

const Metadata = ({title}: MetadataProps) => {
    return (
        <Head>
            <meta charSet={"utf-8"}/>
            <meta name={"viewport"} content={"width=device-width, initial-scale=1, shrink-to-fit=no"}/>
            <title>{title}</title>
        </Head>
    )
}

export default Metadata;