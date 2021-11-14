import Image from "next/image";
import arrow from "../public/vectors/arrow.svg"

const IntroText = (props) => {
    return (
        <div className={"px-5 " + props.className}>
            <h1 className={"text-3xl lato-black tracking-wide"}>Wir helfen Ihnen Ihre Projekte umzusetzen. </h1>
            <h2 className={"text-3xl lato-light pt-8"}>Mit professionellen Verbindungen zu anderen Branchen erreichen
                wir gemeinsam Ihr Ziel.</h2>
            <div className={"flex justify-center mt-48"}>
                <Image alt={"arrow to go down"} src={arrow} width={"48"} height={"48"}/>
            </div>
        </div>
    )
}
export default IntroText
