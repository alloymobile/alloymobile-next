import Link from "next/link";

export default function AlloyLinkLogo(props)
{   
    return (
        <Link
            href={props.linkLogo.href} className={`${props.linkLogo.className} ${props.linkLogo.active}`}
        >
            <img src={props.linkLogo.logo.src} alt={props.linkLogo.logo.alt} width={props.linkLogo.logo.width} height={props.linkLogo.logo.height}/>
            <span className="px-2">{props.linkLogo.name}</span>
        </Link>
    )
}