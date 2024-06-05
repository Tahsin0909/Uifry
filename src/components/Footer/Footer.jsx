
const Footer = () => {
    return (
        <footer className=" lg:mt-16 md:mt-40 mt-20  ">
            <section className="lg:max-w-screen-xl md:max-w-[700px] max-w-[380px] mx-auto grid lg:grid-cols-5 md:grid-cols-3 gap-4 grid-cols-1 lg:py-10">
                <div className="flex flex-col justify-center space-y-3">
                    {/* logo  */}

                    <div className=" flex items-center mb-2">
                        <img className="lg:w-10 md:w-8 w-8" src="/logo.png" alt="" />
                        <span className="text-xl font-bold">uifry</span>
                        <span className="text-[8px]">TM</span>
                    </div>
                    <div className=" flex items-center gap-2">
                        <img className="w-5" src="https://cdn-icons-png.flaticon.com/128/10308/10308979.png" alt="" />
                        <span className="">help@Frybix.com</span>
                    </div>
                    <div className=" flex items-center gap-2">
                        <img className="w-5" src="https://cdn-icons-png.flaticon.com/128/9946/9946316.png" alt="" />
                        <span className="">+123456789654</span>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Links</h4>
                    <ul className="space-y-4">
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Home</a></li>
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">About Us</a></li>
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Bookings</a></li>
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Legal</h4>
                    <ul className="space-y-4">
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Terms Of Use</a></li>
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Privacy and Policy</a></li>
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Cookie Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Product</h4>
                    <ul className="space-y-4">
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Take tour</a></li>
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Live Chat</a></li>
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Services</a></li>
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Reviews</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Newsletter</h4>
                    <ul className="space-y-4">
                        <li><a href="javascript:void(0)" className="text-gray-700 hover:text-[#FF5555] text-sm">Stay Up to Date</a></li>
                        <form>
                            <div className="flex">
                                <input type="email" className="px-4 py-4 text-sm rounded-l-md w-full focus:outline-none bg-gray-50"
                                    placeholder="Enter your email address" />
                                <button type="button"
                                    className="css_button">Subscribe</button>
                            </div>
                        </form>
                    </ul>
                </div>
            </section>
            {/* <hr /> */}
            <div className="py-4 divide-dashed divider">
                <p className="text-center py=10">Copyright 2024 Uifry.Com Al Rights Reserved</p>

            </div>

        </footer>
    );
};

export default Footer;