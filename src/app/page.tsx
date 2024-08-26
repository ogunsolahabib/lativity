import Image from "next/image";
import LinkButton from "./components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectsCarousel from "./components/sections/ProjectsCarousel";
import StarRating from "./components/ui/star-rating";
import BlogArticleCard from "./components/ui/blog-article-card";

const services = [{ name: 'Graphic design', image: '/images/services_graphic-design.png', description: 'We offer excellent graphic design services at affordable prices to transform your brand.' },
{ name: 'Printing', image: '/images/services_printing.png', description: 'We offer excellent and quality printing services at affordable prices to transform your brand.' },
{ name: 'Branding', image: '/images/services_branding.png', description: 'We offer excellent and unique branding services at affordable prices to transform your brand.' },
{ name: 'UI/UX design', image: '/images/services_ui-ux-design.png', description: 'We offer excellent UI/UX design services at affordable prices to transform your brand.' },
{ name: 'Website design', image: '/images/services_web-design.png', description: 'We offer excellent and unique branding services at affordable prices to transform your brand.' },
{ name: 'Digital marketing', image: '/images/services_digital-marketing.png', description: 'We offer excellent and digital marketing services at affordable prices to transform your brand.' }
]


export default function Home() {
  return (<>
    <header>

      <nav className="hidden md:flex gap-10 items-center">
        <span>Logo</span>

        {/* links */}
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <a href="#project-form" className="btn">Discuss a project</a>
      </nav>
    </header>
    <main>
      <section className="py-10">
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

      <section className="py-10">
        <div className="section__container">
          <div className="text-center">
            <h2 className="section__heading--main">What we do?</h2>
            <h3 className="section__heading--sub">Services we can help you with</h3>
            {/* <p>We offer excellent digital services at affordable prices to assist you in transforming your brand into a global competitor.</p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 justify-center">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <div className="w-full h-64 relative">
                  {/* full width image */}
                  <Image src={service.image} alt={service.name} layout="fill" className="object-cover" />
                </div>
                <h4 className="card__heading">{service.name}</h4>
                <p className="card__description w-full">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
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
              We design aesthetically pleasing website, print, and develop mobile app to provide effective solutions for brands.
            </p>
            <LinkButton href="#" className="block w-fit">View our works</LinkButton>
          </div>
        </div>
      </section>
      <section id='project-form' className='py-10 bg-l_blue text-white'>
        <div className="section__container w-full md:max-w-[70rem]">
          <h2 className="text-xl text-center">Discuss a project</h2>
          <p className="text-3xl text-center font-bold">Give us details of your work and let’s get started</p>
          <form className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mx-auto">
              <Label htmlFor="name">
                <div className="mb-2">Name</div>
                <Input type="text" name="name" id="name" placeholder="Your name" />
              </Label>
              <Label htmlFor="company">
                <div className="mb-2">Company</div>
                <Input type="text" name="company" id="company" placeholder="Your company" />
              </Label>
              <Label htmlFor="email">
                <div className="mb-2">Email</div>
                <Input type="email" name="email" id="email" placeholder="Your email" />
              </Label>
              <Label htmlFor="phone">
                <div className="mb-2">Phone</div>
                <Input type="tel" name="phone" id="phone" placeholder="Your phone" />
              </Label>
            </div>
            <Label htmlFor="message" className="block mt-6">
              <div className="mb-2">Message</div>
              <Textarea className="w-full" name="message" id="message" placeholder="Your message">
              </Textarea>
            </Label>
            <Button className="bg-l_gold hover:bg-l_gold block mt-10 mx-auto w-full md:w-80" type="submit">Submit</Button>
          </form>
        </div>
      </section>
      <section id="recent" className="py-10">
        <div className="section__container">
          <div className="text-center">
            <h2 className="section__heading--main">Recent works</h2>
            <p className="section__heading--sub mx-auto w-full md:w-1/2">Check out some of recent work. Give us details of your work and let’s get started</p>
          </div>
          <div className="mt-10"><ProjectsCarousel /></div>
          <a href="#" className="block w-fit mx-auto mt-10 bg-l_blue text-white px-10 py-5 rounded-md">View all works</a>
        </div>
      </section>
      <section id="reviews" className="py-10 bg-[#F8F8FD]">
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
      <section id="blog" className="py-10 bg-l_blue text-white">
        <div className="section__container">
          <div className="text-center">
            <h2 className="text-xl">News & updates</h2>
            <p className="text-3xl font-semibold mx-auto w-full md:w-1/2">View our updated blog posts. 1000+ satisfied clients comments.</p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 justify-center mx-auto max-w-5xl">
              <BlogArticleCard />
              <BlogArticleCard />
            </div>
          </div>
        </div>

      </section>
      <section id="blog">
        <h2>Let&apos;s get started</h2>
        <p>View our updated blog posts. 1000+ satisfied clients comments. Give us details of your work and let’s get started</p>
        <a href="#discuss" className="btn">Discuss a project</a>
      </section>
    </main >
    <footer>
      Footer

      <div>
        <div>
          <div>logo</div>
          <p>We offer excellent digital services at affordable
            prices to assist you in transforming your brand
            into a global competitor. We offer excellent
            digital services at affordable prices to assist
            you in transforming your brand into a global
            competitor.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#">Graphic design</a></li>
            <li><a href="#">Printing</a></li>
            <li><a href="#">Branding</a></li>
            <li><a href="#">UI/UX design</a></li>
            <li><a href="#">Website design</a></li>
            <li><a href="#">Digital marketing</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Client</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="#">Phone</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Linkedin</a></li>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
      <p>© {new Date().getFullYear()} Lativity. All rights reserved</p>
    </footer>
  </>
  );
}
