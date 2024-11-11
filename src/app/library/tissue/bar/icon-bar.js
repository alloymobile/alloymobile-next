import AlloyIcon from "../../cell/icon/icon";
import AlloyIconLink from "../../cell/icon/icon-link";


export default function AlloyIconBar(props)
{
    if(props.iconBar.icons.length > 0){
        if(props.iconBar.icons[0].href != undefined  ){
            return (
                <div className={props.iconBar.className}>
                    {props.iconBar.icons.map((icon, index) => (
                        <AlloyIconLink key={index} iconLink={icon} />
                    ))}
                </div>
            )
        }
        if(props.iconBar.icons[0].type != undefined && props.iconBar.icons[0].type == "button" ){
            return (
                <div className={props.iconBar.className}>
                    {props.iconBar.icons.map((icon, index) => (
                        <AlloyIconButton key={index} iconButton={icon} />
                    ))}
                </div>
            )
        }
        return (
            <div className={props.iconBar.className}>
                {props.iconBar.icons.map((icon, index) => (
                    <AlloyIcon key={index} icon={icon} />
                ))}
            </div>
        )
    }
}
