const Footer = () => {
    return (
        <>
            <div className={"py-3 bg-gold text-space mx-5 text-sm text-center lato-bold my-4 rounded-lg cursor-pointer"}
                 onClick={() => window.location = "https://dazesace.dev"}>
                <p className={""}>!! Site under construction !!</p>
                <p className={"underline"}>Developer contact: dazesace.dev</p>
            </div>
            <p className={"text-sm text-center lato-light pb-4"}>© 2021 Michaela Bekavac Consulting UG</p>
        </>
    )
}
export default Footer
