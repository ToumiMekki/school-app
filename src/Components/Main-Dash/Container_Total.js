import React from 'react'

function Container_Total(props) {
    const {title,number}=props;
    return (
        <div className="container">
            <h4 className="titlecss">{title}</h4>
            <h2 className="numcss">{number}</h2>
        </div>
    )
}

export default Container_Total
