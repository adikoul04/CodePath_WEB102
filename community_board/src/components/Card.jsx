import React from "react";

const Card = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h5>{props.event}</h5>
        </td>
    )
}

export default Card;