import React from 'react'

function Container_Prof(props) {
    const {title_prof,num_prof,types} = props
    return (
        <div className="container_prof">
            <h3>{title_prof}</h3>
            <h4>{num_prof}</h4>
        </div>
    )
}

export default Container_Prof
