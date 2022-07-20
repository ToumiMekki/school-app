import axios, * as others from 'axios'
import { useState } from 'react'
import swal from 'sweetalert';

function New_class({closeNewclass}) {

    const [Class_name,setClass_name]=useState('')
    const [Number_MaxClass,setNumber_MaxClass]=useState('')
    const [Class_type,setClass_type]=useState('')
    const [Note_Class,setNote_Class]=useState('')


    const AddClasse = () =>{
        axios.post("http://localhost:9000/createClasses",{
                Class_name: Class_name,
                Max_number: Number_MaxClass,
                Type_class: Class_type,
                Note: Note_Class,
        })
        swal("New Class " +Class_name+" success");
        closeNewclass(false)
}



  return (

    <div className="NewClass">
            <button id="closeNewStudent" onClick={() => closeNewclass(false)}></button>
            <h1>Ajouter Une Classe</h1>
            <div  action='' className="Form_Class">
                <input type="text" placeholder="Name of Classe" 
                        maxlength="20"
                        onChange={(e)=>{
                            setClass_name(e.target.value)
                        }}
                />
                <input type="text" placeholder="Le nomber Max des etudiant Pour cet Classe"
                 maxlength="3"
                 onChange={(e)=>{
                    setNumber_MaxClass(e.target.value)
                }}
                />
                <select name="" id="" 
                onChange={(event) => setClass_type(event.target.value)}
                >
                    <option value="" disabled selected>choisissez votre type de Classe:</option>
                    <option value="enphi">enphi</option>
                    <option value="salle normal">salle normal</option>
                    <option value="salle de conference">salle de conference</option>
                </select>
                <textarea rows="4" cols="50" name="comment" form="usrform" className="Note"
                placeholder="Enter Des Note pour cet classe ...."
                onChange={(e)=>{
                    setNote_Class(e.target.value)
                }}
                ></textarea>
                <input type="submit" value="Save" onClick={AddClasse}/>
            </div>
        </div>

  )

}

export default New_class;
