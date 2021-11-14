import Head from 'next/head'
import Navbar from "../components/Navbar";

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
            <main>
                <Navbar/>
            </main>
        </div>
    )
}
