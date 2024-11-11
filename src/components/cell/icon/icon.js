import React from 'react';

export default function AlloyIcon(props)
{
    return (
        <span className={props.icon.className}>
            <i className={props.icon.name}></i>
        </span>
    )
}
