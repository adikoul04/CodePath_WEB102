import React from "react";

const Card = (props) => {
    return (
        <td className={'Event ' + props.category}>
            <h5>{props.name}</h5>
            <img src={props.image}></img>
            <p>{props.description}</p>
        </td>
    )
}

export default Card;