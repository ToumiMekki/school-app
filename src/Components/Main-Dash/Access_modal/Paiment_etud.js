import { MultiSelect } from "react-multi-select-component";
import { useState } from 'react'


function Paiment_etud({closePay_stud}) {

    const options = [
        { label: "Grapes", value: "grapes" },
        { label: "Mango", value: "mango" },
        { label: "Strawberry", value: "strawberry"},
      ];
      
        const [selected, setSelected] = useState([]);

    return (
        <div className="Paiment_etud">
            <button onClick={() => closePay_stud(false)}></button>
            <h2>Paiement Etudaint</h2>
            <label htmlFor="">le Nom de l'étudiant</label><br />
            <select name="" id="">
                <option value="" disabled selected>Choisir Le Nom de l'étudiant</option>
                <option value="">Student Name</option>
            </select>
            <label htmlFor="">les Cours qui vous payer :</label><br />
            <MultiSelect className="Multiselect_StudPay"
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
            />
            <label htmlFor="">le Montant qui vous payer :</label><br />
            <input type="text" name="" id="paiementStud_value" maxLength='7' placeholder="1000/Dzd"/>
            <input type="submit" value="Save" />
        </div>
    )
}

export default Paiment_etud
