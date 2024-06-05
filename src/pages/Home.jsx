import Banner from "../components/Banner/Banner";
import NavBar from "../components/Navbar/NavBar";
import Premium from "../components/premium/Premium";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Premium />
            <Testimonials />
        </div>
    );
};

export default Home;