
const Mobile = ({image}) => {
    return (
        <div className="relative">
            <img className="absolute rotate-[14deg] translate-x-9 md:w-[700px] w-[300px]" src={image} alt="" />
            <img className=" absolute -z-20 md:w-[600px] w-[300px]" src="/ring.png" alt="" />
            <img className=" -z-40 md:translate-x-0 -translate-x-5 relative" src="/public/liner.png" alt="" />
        </div>
    );
};

export default Mobile;