import Image from "next/image";

export default function BlogArticleCard() {
    return <article>
        <div className="flex flex-col gap-2 md:gap-5">
            <div className="relative w-full h-[300px]">
                <Image src="/images/project-1.png" alt="blog" layout="fill" className="object-cover" />
            </div>
            <h3 className="font-semibold text-2xl">Graphic Design layout in the modern
                day economical status</h3>
            <div>By <span className="font-bold">{"Kehinde Musa"}</span> on <span className="font-bold"><time dateTime="2024-03-24">{"March 24, 2024"}</time></span>.</div>
            <p>Graphic design is a creative art which principles can
                never be over emphasized in the modern day economy.
                Technology has developed various software that can
                be easily used to design graphic elements in easier and
                more professional ways.</p>
        </div>
    </article>
}