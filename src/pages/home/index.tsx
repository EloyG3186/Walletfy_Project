
import Header from "./header";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="cd-flex cd-items-center cd-flex-col cd-gap-y-[4rem]">

                <h1 className="cd-text-4xl cd-font-bold cd-text-center">Bienvenido!</h1>
                <div className="cd-flex cd-flex-col cd-text-center cd-gap-y-[1rem]">
                </div>
            </div>
        </div>
    );
};

export default Home;