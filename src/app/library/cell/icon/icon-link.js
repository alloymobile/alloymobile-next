import Link from 'next/link';
import AlloyIcon from '../icon/icon';

export default function AlloyIconLink(props)
{
    return (
        <Link href={props.iconLink.href} className={`${props.iconLink.className} ${props.iconLink.active}`}>
            <AlloyIcon icon={props.iconLink.icon} />
        </Link>
    )
}