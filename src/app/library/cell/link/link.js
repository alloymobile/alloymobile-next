import Link from "next/link";

export default function AlloyLink(props)
{
    return (
        <Link
            href={props.link.href} className={`${props.link.className} ${props.link.active}`}
        >
            <span className="px-2">{props.link.name}</span>
        </Link>
    )
}