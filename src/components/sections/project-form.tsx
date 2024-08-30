import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ProjectForm() {
    return <section id='project-form' className='section bg-l_blue text-white'>
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
}