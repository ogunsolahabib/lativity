export default function mergeClassNames(...classNames: Array<string | undefined | null>) {
    return classNames.filter(Boolean).join(' ');
}