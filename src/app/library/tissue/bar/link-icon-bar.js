import AlloyLinkIcon from "../../cell/link/link-icon";



export default function AlloyLinkIconBar(props)
{
    return (
        <div className={props.linkIconBar.className}>
            {props.linkIconBar.links.map((link, index) => (
                <AlloyLinkIcon key={index} linkIcon={link} />
            ))}
        </div>
    )
}