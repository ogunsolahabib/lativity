export default function Ring(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 360 360" {...props}>
            <circle cx="180px" cy="180px" r="clamp(0px, 15vw,160px)" stroke="currentColor" stroke-width="clamp(0px, 3vw, 40px"></circle>
        </svg>
    );
}

