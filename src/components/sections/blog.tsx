import BlogArticleCard from "../ui/blog-article-card";

export default function Blog() {
    return <section id="blog" className="section bg-l_blue text-white">
        <div className="section__container">
            <div className="text-center">
                <h2 className="text-xl">News & updates</h2>
                <p className="text-3xl font-semibold mx-auto w-full md:w-1/2">View our updated blog posts. 1000+ satisfied clients comments.</p>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 lg:gap-20 justify-center mx-auto max-w-5xl">
                    <BlogArticleCard />
                    <BlogArticleCard />
                </div>
            </div>
        </div>
    </section>
}