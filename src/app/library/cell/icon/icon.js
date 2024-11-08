export default function Icon(props)
{
    return (
        <span id={props.icon.id} className={props.icon.className}>
            <i className={props.icon.iconName}></i>
        </span>
    )
}
