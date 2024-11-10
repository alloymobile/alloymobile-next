import AlloyLink from "../../cell/link/link";

export default function AlloyLinkBar(props)
{
    return (
        <div className={props.linkBar.className}>
            {props.linkBar.links.map((link, index) => (
                <AlloyLink key={index} link={link} />
            ))}
        </div>
    )
}