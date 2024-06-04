
const NavBar = () => {
    return (
        <nav className="flex items-center  lg:max-w-screen-xl md:max-w-screen-md mx-auto css_navbar">
            <div className="flex items-center lg:flex-none flex-1">


                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className="css_shared_Color font-bold">Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Features</a></li>
                    </ul>
                </div>

                {/* logo  */}
                <div className=" flex items-center">
                    <img className="lg:w-10 md:w-8 w-8" src="/logo.png" alt="" />
                    <span className="text-xl font-bold">uifry</span>
                    <span className="text-[8px]">TM</span>
                </div>


            </div>
            <div className=" hidden lg:flex flex-1 lg:mx-20 lg:py-4 text-lg" >
                <ul className="flex items-center gap-8 px-1">
                    <li><a className="css_shared_Color font-bold">Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Features</a></li>
                </ul>
            </div>
            <div className=" css_button">
                <a className="">Download</a>
            </div>
        </nav>
    );
};

export default NavBar;