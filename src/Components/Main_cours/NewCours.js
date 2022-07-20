import axios, * as others from 'axios'
import { useState } from 'react'
import swal from 'sweetalert';



function NewCours({closeNewCours}) {

    const [title_cours,setTitle_cours]=useState('')
    const [frais_Cours,setFrais_Cours]=useState('')
    const [dure_PayCours,setDure_PayCours]=useState('')
    const [description,setDescription]=useState('')


    const AddCours = () =>{
            axios.post("http://localhost:9000/createCours",{
                title_cours: title_cours ,
                frais_Cours: frais_Cours,
                dure_PayCours:dure_PayCours,
                description: description          
            })
            closeNewCours(false);
            swal("cours "+ title_cours +" ajouter success")
            
    }


    return (
        <div className="NewCours">
            <button id="closeNewStudent" onClick={() => closeNewCours(false)}></button>
            <h1>Ajouter Un Cours</h1>
            <div className="Form_Cours">
                <input type="text" placeholder="Name of Cours" 
                        onChange={(e)=>{
                            setTitle_cours(e.target.value)
                        }} maxlength="20"
                />
                <input type="text" placeholder="Les Frais Scolaire"
                        onChange={(e)=>{
                            setFrais_Cours(e.target.value)
                        }} maxlength="7"
                />
                <select name="" id=""
                        onChange={(event) => setDure_PayCours(event.target.value)}
                >
                    <option value="zero" disabled selected>choisissez votre type de paiement:</option>
                    <option value="mois">mois</option>
                    <option value="formation">formation</option>
                    <option value="semester">semester</option>
                    <option value="trimestre">trimestre</option>
                </select>
                <textarea rows="4" cols="50" name="comment" form="usrform" className="Descreption"
                placeholder="Enter la description de cours ...."
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}                
                ></textarea>
                <input type="submit" value="Save" onClick={AddCours}/>

            </div>
        </div>
    )
}

export default NewCours
