import Mobile from '../Shared/mobile/Mobile';
import image2 from '/iPhone-13-Pro-Front (1).png'
import image3 from '/iPhone-13-Pro-Front.png'
import subImage from '/On Hold.png'
const WhyChooseUs = () => {
    return (
        <section className="lg:max-w-screen-xl md:max-w-[700px] max-w-[380px] mx-auto lg:mt-52 md:mt-40 mt-20">
            <div className="flex lg:flex-row flex-col items-center lg:gap-7">
                <div className="lg:space-y-6 space-y-3 lg:w-[700px]">
                    <div>
                        <p className="css_shared_Color text-sm">Advantages</p>
                        <p className="lg:text-4xl md:text-2xl font-bold">Why Choose Uifry?</p>
                    </div>
                    <div className="flex items-center lg:gap-4 gap-3">
                        <img className="w-8" src="/notification.png" alt="" />
                        <p className="font-bold lg:text-xl text-g">Budgeting Intervals</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut alias doloribus expedita sint repellat saepe voluptatibus tenetur culpa modi, necessitatibus sed quibusdam praesentium, corrupti delectus, dolorum eaque provident esse voluptatem!</p>
                </div>
                <Mobile image={image2} subImage={subImage} />
            </div>
            <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-7 lg:mt-28 md:mt-40" >
                <Mobile image={image3} />

                <div className="lg:space-y-6 space-y-3 lg:w-[700px]">
                    <div className="flex items-center  lg:gap-4 gap-3">
                        <img className="w-8" src="/star.png" alt="" />
                        <p className="font-bold lg:text-xl">Fully Customizable</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut alias doloribus expedita sint repellat saepe voluptatibus tenetur culpa modi, necessitatibus sed quibusdam praesentium, corrupti delectus, dolorum eaque provident esse voluptatem!</p>
                </div>
            </div>
        </section>

    );
};

export default WhyChooseUs;