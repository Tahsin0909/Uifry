
const NavBar = () => {
    return (
        <nav className="navbar border max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Features</a></li>
                    </ul>
                </div>

                {/* logo  */}
                <a className="text-xl flex items-center font-bold">
                    <img className="lg:w-10" src="/logo.png" alt="" />
                    <span>uifry</span>
                </a>


            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Features</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className=" css_button">Download</a>
            </div>
        </nav>
    );
};

export default NavBar;