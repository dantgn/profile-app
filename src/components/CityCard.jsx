import React from "react";

const CityCard = (props) => {
    const {children, ...rest} = props

    return (
        <div className="bg-white py-5 md:p-6" {...rest}>
            {children}
        </div>
    )
}

export default CityCard