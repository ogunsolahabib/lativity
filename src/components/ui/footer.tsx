import Image from "next/image";

const footerLinks = [{ heading: 'Services', links: [{ name: 'Graphic design', url: '#' }, { name: 'Printing', url: '#' }, { name: 'Branding', url: '#' }, { name: 'UI/UX design', url: '#' }, { name: 'Website design', url: '#' }, { name: 'Digital marketing', url: '#' }] },
{ heading: 'Company', links: [{ name: 'About', url: '#' }, { name: 'Contact', url: '#' }, { name: 'Blog', url: '#' }] }]

const socialIcons = [{ name: 'Phone', image: '/images/tel-white.png' }, { name: 'Instagram', image: '/images/ig-white.png' }, { name: 'Linkedin', image: '/images/li-white.png' }, { name: 'Whatsapp', image: '/images/wa-white.png' }, { name: 'Facebook', image: '/images/fb-white.png' },]

export default function Footer() {
    return (
        <footer className="section bg-l_blue text-white py-10 md:py-20">
            <div className="section__container grid grid-cols-1 md:grid-cols-4 md:justify-items-center gap-10">
                <div>
                    <Image src="/images/logo-white.png" alt="logo" width={60} height={60} className="object-cover w-fit mx-auto md:ml-0" />
                    <p className="mt-5">We offer excellent digital services at affordable prices to assist you in transforming your brand into a global competitor. We offer excellent digital services at affordable prices to assist you in transforming your brand into a global competitor.</p>
                </div>

                {footerLinks.map(group => <div key={group.heading} className="">
                    <h4 className="font-bold">{group.heading}</h4>
                    <ul className="mt-2">{group.links.map(link => <li><a href={link.url}>{link.name}</a></li>)}</ul></div>)
                }
                <div>
                    <h4 className="font-bold">Get in touch</h4>
                    <ul className="mt-2 flex gap-2">
                        {socialIcons.map(icon => <li key={icon.name} style={{ '--icon-image': `url(${icon.image})` }} className={`flex items-center gap-2 bg-[image:var(--icon-image)] text-transparent bg-[length:2rem_2rem] w-8 h-8`}>{icon.name}</li>)}
                    </ul>
                </div>
            </div>
            <p className="text-center mt-20">© {new Date().getFullYear()} Lativity. All rights reserved</p>
        </footer>
    )
}