import Head from 'next/head'

export default function Home() {
    return (
        <div className={"text-gold"}>
            <Head>
                <title>Michaela Bekavac Consulting</title>
                <meta name="description" content="Michaela Bekavac Consulting"/>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    rel="preload"
                    href="/fonts/Lato-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <div>
                <p className={"lato-light"}>Juice Bruice</p>
            </div>
        </div>
    )
}
