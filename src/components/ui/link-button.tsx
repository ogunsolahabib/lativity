import mergeClassNames from "@/app/utils/mergeClassNames";

export default function LinkButton({ children, href, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a href={href} className={mergeClassNames("btn bg-l_blue px-10 py-5 text-white rounded-md text-center", className)} {...props} >{children}</a>
    )
}