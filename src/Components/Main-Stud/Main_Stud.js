import React from 'react'
import totalStud_info from './totalStud_info'
import Total_stud from './Total_stud'
import Container_Stud from './Container_Stud'

function Main_Stud() {
    return (
        <div className="Main_Stud">
            <h2>Nomber des Etudiants par levels :</h2><br />         
            <ul>  
                <li><Container_Stud title="Meki" num="29"/></li>
                <li><Container_Stud title="Meki" num="29"/></li>
                <li><Container_Stud title="Meki" num="29"/></li>
                <li><Container_Stud title="Meki" num="29"/></li>
                <li><Container_Stud title="Meki" num="29"/></li>
                <li><Container_Stud title="Meki" num="29"/></li>
                <li><Container_Stud title="Meki" num="29"/></li>
                <li><Container_Stud title="Meki" num="29"/></li>
                <li><Container_Stud title="Meki" num="29"/></li>
                <li><Container_Stud title="Meki" num="29"/></li>
            </ul>
            <Total_stud />


        </div>
    )
}

export default Main_Stud
