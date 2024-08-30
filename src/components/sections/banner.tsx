import BottomBannerShapesLeft from "../svg/bottom-banner-shapes-left";
import BottomBannerShapesRight from "../svg/bottom-banner-shapes-right";
import DotsInSquareBlue from "../svg/dots-in-square-blue";

export default function Bannner() {
    return <section id="banner" className="py-10 relative overflow-hidden border-y-[4rem] border-white bg-[#F8F8FD]">
        <DotsInSquareBlue className="absolute -top-12 left-20 w-20 h-20 rotate-45 -z-0" />
        <DotsInSquareBlue className="absolute bottom-2 -right-10 w-20 h-20 -rotate-45 -z-0" />
        <div className="section__container">
            <div className="relative">
                <BottomBannerShapesLeft className="hidden md:block w-1/5 h-auto aspect-[13/10] absolute left-20 top-0 bottom-0" />
                <div className="max-w-[56rem] mx-auto">
                    <div className="text-center mt-5 md:mt-0">
                        <h2 className="section__heading--main">Let&apos;s get started</h2>
                        <p className="text-xl mx-auto w-full md:w-1/2">View our updated blog posts. 1000+ satisfied clients comments.</p>
                    </div>
                    <a href="#project-form" className="btn--primary mt-10">Discuss a project</a>
                </div>
                <BottomBannerShapesRight className="hidden md:block w-1/5 h-auto aspect-[14/10] absolute right-20 top-0 bottom-0" />
            </div>
        </div>
    </section>
}