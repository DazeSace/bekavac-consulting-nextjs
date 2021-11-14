import Head from 'next/head'
import Navbar from "../components/Navbar";
import IntroText from "../components/IntroText";

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
                <link
                    rel="preload"
                    href="/fonts/Lato-Black.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Lato-Light.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <main>
                <Navbar/>
                <IntroText className={"pt-24"}/>
            </main>
        </div>
    )
}
