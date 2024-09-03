import Image from "next/image";
import Ring from "../svg/ring";
import DotsInSquare from "../svg/dots-in-square-blue";

export default function PreviousWorks() {
    return <section className="section relative">
        <div className="section__container">
            <div className="text-center">
                <h2 className="section__heading--main">View our works</h2>
                <p className="section__heading--sub">Check our porfolio. Lorem ipsum dolor sit.</p>
            </div>
        </div>
        <div className="section__container flex flex-col-reverse md:flex-row gap-10 mt-20 items-center">
            <div>
                <Image src='/images/portfolio-section-image.png' width={548} height={485} alt='' />
            </div>
            <div className="md:w-1/2 flex flex-col gap-6">
                <h3 className="text-4xl font-bold">We <span className="text-l_blue">design</span>, <span className="text-l_blue">develop</span>, and <span className="text-l_blue">market online</span> for brands.
                </h3>
                <p className="text-xl">
                    We design aesthetically pleasing websites, print, and develop mobile app to provide effective solutions for brands.
                </p>
                <a href="#" className="btn--primary block w-fit">View our works</a>
            </div>
        </div>
        <Ring className="hidden md:block absolute -bottom-48 -right-24 w-96 h-96 text-l_blue -z-50" />
        <DotsInSquare className="hidden md:block absolute -top-6 -left-0 w-[12vw] h-[12vw]  -z-0 text-l_blue" />
    </section>
}