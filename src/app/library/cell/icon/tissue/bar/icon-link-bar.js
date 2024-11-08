import IconLink from "../../icon-link";

export default function IconLinkBar(props)
{
    return (
        <div className={props.iconLinkBar.className}>
            {props.iconLinkBar.links.map((link, index) => (
                <IconLink key={index} iconLink={link} />
            ))}
        </div>
    )
}