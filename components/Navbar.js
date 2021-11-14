import Image from "next/image";
import flower from "../public/vectors/flower-of-life.svg"
import burger from "../public/vectors/navbar-hamburger.svg"

const Navbar = () => {
    return (
        <div className={"flex justify-between bg-sea px-4 py-4"}>
            <div className={"flex"} id={"brandname-wrapper"}>
                <Image width={"48"} height={"48"} alt={"flower of life logo"} src={flower}/>
                <p className={"lato-bold text-2xl px-3 pt-2"}>Michaela Bekavac</p>
            </div>
            <div className={"flex justify-items-center justify-center h-12 w-12 w-6"}>
                <Image width={"36"} height={"36"} alt={"navbar burger menu button"} src={burger}/>
            </div>
        </div>
    )
}
export default Navbar
