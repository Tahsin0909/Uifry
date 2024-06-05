
// eslint-disable-next-line react/prop-types
const Mobile = ({image, subImage}) => {
    return (
        <div className="relative">
            <img className="absolute rotate-[14deg] translate-x-9 md:w-[700px] w-[300px]" src={image} alt="" />
            <img className="absolute  md:translate-x-48 md:translate-y-60 translate-x-28 translate-y-36  md:w-[300px] w-[200px]" src={subImage} alt="" />
            <img className=" absolute -z-20 md:w-[600px] w-[300px]" src="/ring.png" alt="" />
            <img className=" -z-40 md:translate-x-0 -translate-x-5 relative" src="/public/liner.png" alt="" />
        </div>
    );
};

export default Mobile;