'use client';

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";


const projects = [
    { image: '/images/project-1.png' },
    { image: '/images/project-2.png' },
]
type EmblaOptionsType = UseEmblaCarouselType[1]

export default function ProjectsCarousel() {
    return <Carousel className="w-full" opts={{
        align: "start",
        loop: true,
    }} plugins={[Autoplay({ delay: 3000 })]}>

        <CarouselContent className="mx-0 md:-mx-80">
            {[...projects, ...projects, ...projects].map((project, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/4">

                    <div>
                        <div className="flex aspect-square items-center justify-center">
                            <Image
                                src={project.image}
                                alt="project"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                </CarouselItem>
            ))}
        </CarouselContent>
    </Carousel>
}