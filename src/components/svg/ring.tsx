export default function Ring(props: React.SVGProps<SVGSVGElement>) {
    return (
        // <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     // width="100"
        //     // height="100"
        //     fill="none"
        //     viewBox="0 0 488 488"
        //     {...props}
        // >
        //     <circle cx="244" cy="244" r="15vw" stroke="currentColor" strokeWidth="40"></circle>
        // </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 360 360" {...props}>
            <circle cx="180px" cy="180px" r="clamp(0px, 15vw,160px)" stroke="currentColor" stroke-width="clamp(0px, 3vw, 40px"></circle>
        </svg>
    );
}

