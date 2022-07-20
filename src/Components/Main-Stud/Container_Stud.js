import React from 'react'

function Container_Stud(props) {
    const {title , num} = props;
    return (

        <div className="Container_Stud">
            <h4 className="title_stud">{title}</h4>
            <h3 className="number_stud">{num}</h3>
        </div>
    )
}

export default Container_Stud
