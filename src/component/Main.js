import AboutMe from "../sub_component/AboutMe";
import Home from "../sub_component/Home";
import Project from "../sub_component/Project";
import Skills from "../sub_component/Skills";

const Main = () => {

    return (
        <div className="Main">
            <Home />
            <AboutMe />
            <Skills />
            <Project />
        </div>
    );
};

export default Main;