import Image from "next/image";
import LinkButton from "../ui/link-button";

export default function Hero() {
    return <section className="py-10">
        <div className="section__container flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
                <h1 className="text-3xl md:text-6xl"><span className="text-l_orange font-bold">Improve your sales,</span><br />
                    Get <span className="text-l_blue font-bold">unique designs</span> for your brand.</h1>
                <p className="mt-10 text-xl">We offer excellent digital services at affordable prices to assist you in transforming your brand into a global competitor.</p>
                <LinkButton href="#project-form" className="mt-10 block md:w-fit">Discuss a project</LinkButton>
            </div>
            <div>
                <Image src='/images/hero-image.png' alt='man with laptop' width={500} height={500} />
            </div>
        </div>
    </section>
}