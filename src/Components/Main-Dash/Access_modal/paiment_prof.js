import { MultiSelect } from "react-multi-select-component";
import { useState } from 'react'


function paiment_prof({closePay_prof}) {
  return (
        <div className="Paiment_prof">
            <button onClick={() => closePay_prof(false)} className="ClosePayprof"></button>
            <h3>Paiement Professeurs ou Staffs</h3>
            <label htmlFor="">le Nom de Proffeseur</label><br />
            <label htmlFor="">le Type de Paiement</label><br />
            <select name="" id="">
                <option value="">Proffeseur Name</option>
            </select>
            <select name="" id="">
                <option value="" disabled selected>le type de Paiement</option>
                <option value="">Proffeseurs</option>
                <option value="">Staffs</option>
            </select><br />
            <label htmlFor="">le Montant qui vous payer :</label><br />
            <input type="text" name="" maxLength='7' placeholder="1000/Dzd"/>
            <input type="submit" value="Save" />


        </div>
)}

export default paiment_prof;
