import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
const Banner = () => {
    return (
        <section className="lg:max-w-screen-xl md:max-w-screen-md mx-auto lg:mt-16 md:mt-10 border border-red-400">
            <div className="flex lg:flex-row flex-col">
                <div className="space-y-8 w-[600px]">
                    <div className="absolute top-8 -z-50 left-50">
                        <img src="/liner.png" alt="" />
                    </div>
                    <p className="lg:text-6xl font-bold">Make the Best <br /> Financial Decisions</p>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab ea nostrum. Voluptatem, omnis et! Inventore qui recusandae consectetur dignissimos.</p>
                    <div className="flex lg:gap-8">
                        <button className="css_button">
                            <span>Get Started</span>
                            <FaArrowRightLong size={20} />
                        </button>
                        <button className="css_button">
                            <IoPlayCircleOutline size={20} />
                            <span>Watch video</span>
                        </button>
                    </div>
                    <img className="-translate-x-8" src="/banner slide.png" alt="" />
                </div>

                <div className="">
                    <img className=" absolute -translate-y-20" src="/public/iPhone-13-Pro-Front.png" alt="" />
                    <img className=" absolute translate-x-28 -translate-y-10 -z-30" src="/public/iPhone-13-Pro-Front (1).png" alt="" />
                    <img className=" absolute translate-x-56 translate-y-10  -z-50" src="/public/iPhone-13-Pro-Front (2).png" alt="" />
                </div>
            </div>

        </section>
    );
};

export default Banner;