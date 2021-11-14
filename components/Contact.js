import Image from "next/image";
import location from "../public/vectors/location_on.svg"
import phone from "../public/vectors/phone_iphone.svg"
import mail from "../public/vectors/mail_outline.svg"

const Contact = () => {
    return (
        <div className={"px-5"}>
            <div className={"bg-sea p-4 rounded-2xl text-xl lato-light"}>
                <p className={"text-2xl lato-bold"}>Michaela Bekavac</p>
                <div className={"flex mt-2"}>
                    <Image alt={"mail icon"} src={mail} width={"30"} height={"30"}/>
                    <p className={"px-2"}>michaela@bekavac.de</p>
                </div>
                <div className={"flex pt-2"}>
                    <Image alt={"phone icon"} src={phone} width={"30"} height={"30"}/>
                    <p className={"px-2"}>+49 171 7947100</p>
                </div>
                <div className={"bg-gold h-px my-3"}/>
                <div className={"flex"}>
                    <Image alt={"location icon"} src={location} width={"30"} height={"30"}/>
                    <div className={"px-2"}>
                        <p>Mainaustraße 204</p>
                        <p>78464 Konstanz</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
