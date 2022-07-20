import React from 'react'

function totalStud_info(props) {
    const {Id,Nom,Prenom,Sexe,stud_frais , stud_group , Stud_anneeScol}=props;

    return (
        <tr className="tr-tw">
            <td>{Id}</td>
            <td>{Nom}</td>
            <td>{Prenom}</td>
            <td>{Sexe}</td>
            <td>{Stud_anneeScol}</td>
            <td>{stud_group}</td>
            <td>{stud_frais}</td>
            <td><input type="checkbox" name="" id="" /></td>
        </tr>
    )
}

export default totalStud_info
