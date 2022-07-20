import React from 'react'
import Student_info from './Student_info';

function Daily_Pointing() {
    return (
        <div className="Daily_Pointing">
            <h3>Enseignants et Staffs qui n'ont pas reçu leur salaire</h3>
            <table className="table">
                <tr className="tr-one">
                    <th>#</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Statut</th>
                    <th>Dernier Paiement</th>
                    <th>Action</th>
                </tr>
                <Student_info image="meki" Name="meki" Family_Name="meki" Statut="meki" Last_pay="meki" Action="meki"/>
                <Student_info image="meki" Name="meki" Family_Name="meki" Statut="meki" Last_pay="meki" Action="meki"/>
                <Student_info image="meki" Name="meki" Family_Name="meki" Statut="meki" Last_pay="meki" Action="meki"/>
            </table>

        </div>
    )
}

export default Daily_Pointing
