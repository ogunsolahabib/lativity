import Image from "next/image";
import StarRating from "../ui/star-rating";

export default function Reviews() {
    return <section id="reviews" className="section bg-[#F8F8FD]">
        <div className="text-center">
            <h2 className="section__heading--main">Client reviews</h2>
            <p className="section__heading--sub mx-auto w-full md:w-1/2">1000+ satisfied clients comments. Give us details of your work and let’s get started</p>
        </div>
        <div className="flex items-center justify-between">
            <div className="hidden md:block w-1/3 h-[24rem] md:h-[650px] bg-[url('/images/reviews-left-bg.png')] bg-no-repeat bg-contain bg-left md:-mr-10 -mb-20"></div>
            <div className="mt-10 mx-auto w-96 p-3 md:p-6">
                <div className="flex flex-col gap-2 md:gap-5 items-center">
                    <h3 className="text-l_blue font-semibold">Client name</h3>
                    <p className="text-xl">We offer excellent digital services at affordable prices to assist you in transforming your brand into a global competitor.</p>
                    <div><Image src="/images/sample-review-avatar.png" alt="client" width={100} height={100} /></div>
                    <div><StarRating rating={5} /></div>
                </div>
            </div>
            <div className="hidden md:block w-1/3 h-[24rem] md:h-[650px] bg-[url('/images/reviews-right-bg.png')] bg-no-repeat bg-contain bg-right md:-ml-10 -mt-20"></div>

        </div>
    </section>
}