const Footer  = () => {

    return (
        <div className="w-full bg-white p-20">
            <div className="content grid-cols-1 grid sm:grid-cols-4 gap-10">
                <div>
                    <h1 className="text-black font-bold mb-6">Games</h1>
                    <ul className="captalize grid gap-[7px]">
                        <li>free fire</li>
                        <li>call of duty mobile</li>
                        <li>bgmi</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-black font-bold mb-6">ESPORTS HUB</h1>
                    <ul className="captalize grid gap-[7px]">
                        <li>leader board</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-black font-bold mb-6">SUPPORT</h1>
                    <ul className="captalize grid gap-[7px]">
                        <li>terms of policy</li>
                        <li>privacy policy</li>
                        <li>Contact us</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-black font-bold mb-6">SOCIALS</h1>
                    <ul className="captalize grid gap-[7px]">
                        <li>face book</li>
                        <li>instagram</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Footer;