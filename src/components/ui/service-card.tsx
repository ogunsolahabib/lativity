
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";

export default function ServiceCard({ service }: any) {
    return <div key={service.name} className="flex flex-col bg-[#F8F8FD]">
        <div className="w-full h-64 relative ">
            {/* full width image */}
            <Image src={service.image} alt={service.name} fill className="object-cover" />
        </div>
        <div className="p-6">
            <h4 className="card__heading">{service.name}</h4>
            <p className="card__description w-full">{service.description}</p>
            <MoveRightIcon className="mt-10" />
        </div>
    </div>
}