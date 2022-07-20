import React from 'react'
import { useState } from 'react'

import New_Étudiante from '../../image/New_Student.png'
import Paiements_Étudiante from '../../image/profits.png'
import Paiements_Professeurs from '../../image/money.png'
import New_depense from '../../image/budget.png'
import New_stud from './Access_modal/New_student'
import Paiment_stud from './Access_modal/Paiment_etud'
import Paiment_prof from './Access_modal/paiment_prof'
import New_Depense from './Access_modal/New_depense'




function Speed_access() {

    const [openNew_Stud ,setopenNew_Stud] = useState(false);
    const [openPay_stud ,setopenPay_stud] = useState(false);
    const [openPay_prof ,setopenPay_prof] = useState(false);
    const [openNew_depense ,setopenNew_depense] = useState(false);

    return (
        <div className="speed_access">    
        <h1>Speed Access</h1>
        <div>
            <button onClick={() =>
            {setopenNew_Stud(true);}}>
            <img src={New_Étudiante} alt="meki" /><br />New<br />Étudiante</button>
            <button onClick={() =>
            {setopenPay_stud(true);} }>
            <img src={Paiements_Étudiante} alt="meki" /><br />Paiements Étudiants</button>
            <button onClick={() =>
            {setopenPay_prof(true);} }>
            <img src={Paiements_Professeurs} alt="meki" /><br />Paiements Professeurs</button>
            <button onClick={() =>
            {setopenNew_depense(true);} }>
            <img src={New_depense} alt="meki" /><br />Nouvelle depense</button>
        </div>
        { openNew_Stud && <New_stud closeNew_stud={setopenNew_Stud}/>}   
        { openPay_stud && <Paiment_stud closePay_stud={setopenPay_stud}/>}    
        { openPay_prof && <Paiment_prof closePay_prof={setopenPay_prof}/>}    
        { openNew_depense && <New_Depense closeNew_depense={setopenNew_depense}/>}    
 
</div>

)
}

export default Speed_access
