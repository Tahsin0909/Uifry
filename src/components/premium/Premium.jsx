import Mobile from "../Shared/mobile/mobile";
import image from '/iPhone-13-Pro-Front.png'
const Premium = () => {
    return (
        <section className="lg:max-w-screen-xl md:max-w-[700px] max-w-[380px] mx-auto lg:mt-16 md:mt-40 mt-64 ">

            <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-7">
                <Mobile image={image} />

                <div className="lg:space-y-6 space-y-3 lg:w-[700px]">
                    <div>
                        <p className="css_shared_Color text-sm">FEATURES</p>
                        <p className="lg:text-4xl md:text-2xl font-bold">Uifry Premium</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <img className="w-4" src="/public/star.png" alt="" />
                            <p className="font-bold">Budgeting Intervals</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae laboriosam quod delectus quasi possimus voluptatibus a neque soluta eum?</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <img className="w-4" src="/public/star.png" alt="" />
                            <p className="font-bold">Budgeting Intervals</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae laboriosam quod delectus quasi possimus voluptatibus a neque soluta eum?</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <img className="w-4" src="/public/star.png" alt="" />
                            <p className="font-bold">Budgeting Intervals</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae laboriosam quod delectus quasi possimus voluptatibus a neque soluta eum?</p>
                    </div>
                </div>
            </div>
            <img className=" absolute right-0 lg:-translate-y-[400px] md:-translate-y-[800px] -translate-y-[700px] -z-40" src="/public/liner.png" alt="" />

        </section>
    );
};

export default Premium;