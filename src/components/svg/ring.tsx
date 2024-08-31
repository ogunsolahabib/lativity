export default function Ring(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="488"
            height="488"
            fill="none"
            viewBox="0 0 488 488"
            {...props}
        >
            <circle cx="244" cy="244" r="15vw" stroke="currentColor" strokeWidth="40"></circle>
        </svg>
    );
}

