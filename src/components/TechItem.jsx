import React from "react";
import { Tooltip } from 'react-tooltip'
import StackIcon from "tech-stack-icons";

const TechItem = (props) => {
    const {key, name} = props

    return (
        <div key={key} className="p-5">
            <Tooltip id={name} />
            <a data-tooltip-id={name} data-tooltip-place="top" data-tooltip-offset="50" data-tooltip-content={name.toUpperCase()}>
                <StackIcon name={name} key={name.id} className="size-14" />
            </a>
        </div>
    )
}

export default TechItem