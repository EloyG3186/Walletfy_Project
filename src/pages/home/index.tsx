
import Header from "./header";
import Body from "./body";

const Home = () => {
    return (
        <div>
            <header>
                <Header />
            </header>

            <div className="cd-p-20">
                <Body />
            </div>

        </div>
    );
};

export default Home;