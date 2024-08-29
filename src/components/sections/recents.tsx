import ProjectsCarousel from "./ProjectsCarousel";

export default function Recents() {
    return <section id="recent" className="py-10">
        <div className="section__container">
            <div className="text-center">
                <h2 className="section__heading--main">Recent works</h2>
                <p className="section__heading--sub mx-auto w-full md:w-1/2">Check out some of recent work. Give us details of your work and let’s get started</p>
            </div>
            <div className="mt-10"><ProjectsCarousel /></div>
            <a href="#" className="block w-fit mx-auto mt-10 bg-l_blue text-white px-10 py-5 rounded-md">View all works</a>
        </div>
    </section>
}