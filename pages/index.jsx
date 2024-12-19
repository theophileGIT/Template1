import { useState, useEffect } from "react";
import { NextSeo } from 'next-seo';
import { calculateAge } from "@/Utils/utils";
import Contact from "../src/Sections/Contact";
import Hero from "../src/Sections/Hero";
import Projects from "../src/Sections/Projects";
import Footer from "../src/Sections/Footer";
import Header from "../src/Components/Header";
import LateralMenu from "../src/Components/LateralMenu";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

const App = () => {
    const [section, setSection] = useState(1);

    const handleScroll = () => {
        var projects = document.getElementById("projects");
        var contact = document.getElementById("contact");

        if (window.scrollY > contact.offsetTop - 400) {
            setSection(3);
        } else if (window.scrollY > projects.offsetTop - 400) {
            setSection(2);
        } else {
            setSection(1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        const cursor = new MouseFollower({
            stateDetection: {
                '-pointer': 'a,button,.square'
            }
        });
    }, []);

    return (
        <>
            <NextSeo
                title={`WEBSITE | NAME`}
                openGraph={{
                    url: "",
                    type: 'website',
                    locale: "en_EN",
                }}
            />
            <div className="App">
                <Header />
                <LateralMenu section={section} />
                <Hero />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default App;
