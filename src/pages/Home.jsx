import Banner from "../components/Banner/Banner";
import NavBar from "../components/Navbar/NavBar";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Premium from "../components/premium/Premium";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Premium />
            <WhyChooseUs/>
            <Testimonials />
        </div>
    );
};

export default Home;