export default function Icon(props)
{
    return (
        <span className={props.icon.className}>
            <i className={props.icon.iconName}></i>
        </span>
    )
}
