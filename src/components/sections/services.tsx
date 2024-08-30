import Image from "next/image"
import ServiceCard from "../ui/service-card"
import RightArcBlue from "../svg/arc-blue"

const services = [{ name: 'Graphic design', image: '/images/services_graphic-design.png', description: 'We offer excellent graphic design services at affordable prices to transform your brand.' },
{ name: 'Printing', image: '/images/services_printing.png', description: 'We offer excellent and quality printing services at affordable prices to transform your brand.' },
{ name: 'Branding', image: '/images/services_branding.png', description: 'We offer excellent and unique branding services at affordable prices to transform your brand.' },
{ name: 'UI/UX design', image: '/images/services_ui-ux-design.png', description: 'We offer excellent UI/UX design services at affordable prices to transform your brand.' },
{ name: 'Website design', image: '/images/services_web-design.png', description: 'We offer excellent and unique branding services at affordable prices to transform your brand.' },
{ name: 'Digital marketing', image: '/images/services_digital-marketing.png', description: 'We offer excellent and digital marketing services at affordable prices to transform your brand.' }
]

export default function Services() {
    return <section className="section relative">
        <div className="section__container">
            <div className="text-center">
                <h2 className="section__heading--main">What we do?</h2>
                <h3 className="section__heading--sub">Services we can help you with</h3>
                {/* <p>We offer excellent digital services at affordable prices to assist you in transforming your brand into a global competitor.</p> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 md:mt-20 justify-center">
                {services.map((service) => (
                    <ServiceCard key={service.name} service={service} />
                ))}
            </div>
        </div>
        <RightArcBlue className="hidden md:block absolute top-[4rem] right-0" />
        <RightArcBlue className="hidden md:block absolute top-[14rem] left-0 -scale-x-100" />
        <RightArcBlue className="hidden md:block absolute bottom-[14rem] left-0 -scale-x-100" />
        <RightArcBlue className="hidden md:block absolute bottom-[8rem] right-0" />
    </section>
}