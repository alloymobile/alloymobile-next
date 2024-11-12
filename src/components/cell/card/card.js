import React from 'react';
export default function AlloyCard(props){
    return(
        <div className={props.card.className}>
            <div
                className={props.card.body.className}
                aria-label={props.card.body.name}
            >
                {Object.entries(props.card.fields).map(([key, field]) => 
                    (
                        <div key={key} className={field.className}>
                            {field.name}
                        </div>
                    )
                )}
            </div>
        </div>
    )
}