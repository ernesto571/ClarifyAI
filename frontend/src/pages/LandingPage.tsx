import Features from "../components/LandingPage/Features";
import Hero from "../components/LandingPage/Hero";
import HowItWorks from "../components/LandingPage/HowItWorks";
import Slide from "../components/LandingPage/Slide";

export default function LandingPage(){

    return(
        <section>
            <Hero />
            <Slide />
            <Features />
            <HowItWorks />
        </section>
    )
}