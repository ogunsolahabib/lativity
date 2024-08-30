import Image from "next/image";
import LinkButton from "../ui/link-button";

export default function Hero() {
    return <section className="py-10">
        <div className="section__container flex flex-col md:flex-row md:items-center lg:items-end justify-between gap-10">
            <div className="md:w-1/2">
                <h1 className="text-3xl md:text-6xl"><span className="text-l_orange font-bold">Improve your sales,</span><br />
                    Get <span className="text-l_blue font-bold">unique designs</span> for your brand.</h1>
                <p className="mt-10 text-xl">We offer excellent digital services at affordable prices to assist you in transforming your brand into a global competitor.</p>
                <LinkButton href="#project-form" className="mt-10 block md:w-fit">Discuss a project</LinkButton>
            </div>
            <div className="relative w-full md:w-fit">
                <Image src='/images/hero-image.png' alt='man with laptop' width={500} height={500} />
                <div className="w-full md:w-11/12 absolute bottom-0 right-0 shadow-[0_0_20px_3px_rgba(0,0,0,0.3)] rounded-lg px-4 md:px-8 py-6 bg-[#9C8F8F] bg-opacity-20 font-bold border-1 border-gray-50">
                    <div className="grid grid-cols-2 items-center justify-between">
                        <span className="flex gap-1 items-center text-l_blue">
                            <span className="text-2xl md:text-4xl font-semibold">10<sup>+</sup></span>
                            <span className="text-black text-xs md:text-sm"> years  of<br /> experience</span>
                        </span>
                        <span className="flex gap-1 items-center text-l_blue">
                            <span className="text-2xl md:text-4xl font-semibold">1000<sup>+</sup></span>
                            <span className="text-black text-xs md:text-sm">happy <br />clients</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
}