import AlloyLink from "../../cell/link/link";
import AlloyLinkIcon from "../../cell/link/link-icon";

export default function AlloyLinkBar(props)
{
    if(props.linkBar.links.length > 0){
        if(props.linkBar.links[0].icon != undefined  ){
            return(
                <div className={props.linkBar.className}>
                    {props.linkBar.links.map((link, index) => (
                        <AlloyLinkIcon key={index} linkIcon={link} />
                    ))}
                </div>
            )
        }else{
            return(
                <div className={props.linkBar.className}>
                    {props.linkBar.links.map((link, index) => (
                        <AlloyLink key={index} link={link} />
                    ))}
                </div>
            )

        } 
    }
}