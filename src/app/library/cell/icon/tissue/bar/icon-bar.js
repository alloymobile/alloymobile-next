import Icon from "../../icon"

export default function IconBar(props)
{
    return (
        <div className={props.iconBar.className}>
            {props.iconBar.icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
        </div>
    )
}
