import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import './Banner.css'
const Banner = () => {
    return (
        <section className="lg:max-w-screen-xl md:max-w-[700px] max-w-[380px] mx-auto lg:mt-16 md:mt-10 ">
            <img className="absolute right-20 top-20" src="/public/Star 1.png" alt="" />
            <img className="absolute left-5 md:w-10 w-6 md:top-20 top-14" src="/public/Star 1.png" alt="" />
            <img className="absolute md:w-10 w-6 lg:top-[500px] md:top-[400px] top-[350px] md:left-40 left-20" src="/public/Star 1.png" alt="" />
            <div className="flex lg:flex-row flex-col ">
                <div className="space-y-4 md:space-y-8 md:w-[700px]">
                    <div className="absolute top-8  -z-50 left-50">
                        <img className="lg:w-full md:w-96 w-48" src="/liner.png" alt="" />
                    </div>
                    <p className="lg:text-6xl md:text-4xl text-2xl font-bold">Make the Best <br /> Financial Decisions</p>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab ea nostrum. Voluptatem, omnis et! Inventore qui recusandae consectetur dignissimos.</p>
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
                    <img className="-translate-x-8 lg:w-[500px] md:w-[500px] w-64 mx-auto md:mx-0" src="/banner slide.png" alt="" />
                </div>

                <div className="">
                    <img className="md:w-[500px] w-[300px] absolute md:-translate-y-20 -translate-y-8" src="/iPhone-13-Pro-Front.png" alt="" />
                    <img className="md:w-[500px] w-[300px] absolute md:translate-x-28 translate-x-16 md:-translate-y-10 -translate-y-1 -z-20" src="/iPhone-13-Pro-Front (1).png" alt="" />
                    <img className="md:w-[400px] w-[250px] absolute md:translate-x-56 translate-x-28 translate-y-10  -z-30" src="/iPhone-13-Pro-Front (2).png" alt="" />
                    <img className="lg:w-[600px] md:w-[400px] w-[300px] absolute md:translate-x-10 translate-x-10 md:-translate-y-20 -translate-y-10   -z-40" src="/ring.png" alt="" />
                    <img className=" absolute translate-x-16 md:w-[600px] w-[200px] translate-y-52  -z-40" src="/liner.png" alt="" />
                </div>
            </div>

        </section>
    );
};

export default Banner;