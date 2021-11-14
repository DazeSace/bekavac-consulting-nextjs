import Head from 'next/head'
import Navbar from "../components/Navbar";
import IntroText from "../components/IntroText";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import HowWeCanHelp from "../components/HowWeCanHelp";
import Work from "../components/Work";
import WhoWeAre from "../components/WhoWeAre";

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
                <HowWeCanHelp/>
                <WhoWeAre/>
                <Work/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}
