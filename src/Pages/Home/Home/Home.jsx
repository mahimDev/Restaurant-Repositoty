import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import OurMenu from "../OurMenu/OurMenu";
import TestMonials from "../TestMonials/TestMonials";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Category></Category>
            <OurMenu></OurMenu>
            <Featured></Featured>
            <TestMonials></TestMonials>
        </div>
    );
};

export default Home;