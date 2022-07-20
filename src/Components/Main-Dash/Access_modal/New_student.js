import add_img from "../../../image/add.png"
import axios, * as others from 'axios'
import { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';


function New_student({closeNew_stud}) {

    const [first_name,setfirst_name]=useState('')
    const [last_name,setlast_name]=useState('')
    const [parent_name,setparent_name]=useState('')
    const [birth_date,setbirth_date]=useState('')
    const [birth_place,setbirth_place]=useState('')
    const [email,setemail]=useState('')
    const [tel_stud,settel_stud]=useState('')
    const [tel_part,settel_part]=useState('')
    const [level_aca,setlevel_aca]=useState('')
    const [cours,setCours]=useState('')
    const [mental_prob,setmental_prob]=useState('')
    const [physic_prob,setphysic_prob]=useState('')

    const addStudToDB = ()=>{
        axios.post("http://localhost:9000/createStudent",{

            first_name:first_name ,
            last_name:last_name,
            parent_name:parent_name ,
            birth_date:birth_date ,
            birth_place:birth_place ,
            email: email,
            tel_stud:tel_stud ,
            tel_part:tel_part ,
            level_aca:level_aca ,
            cours:cours ,
            mental_prob:mental_prob ,
            physic_prob:physic_prob ,
        })
        closeNew_stud(false)
      }

      const Data = [
        {name: 'Option 1️⃣', id: 1},
        {name: 'Option 2️⃣', id: 2}
    ]

    const [option] = useState(Data)

        const preview = function previewImage(){
                var file = document.getElementById("file").files
                if (file.length > 0){
                    var fileReader = new FileReader();
                    fileReader.onload = function (event){
                    document.getElementById("preview").setAttribute("src" , event.target.result);
                    console.log(event.target)
                    };
                    fileReader.readAsDataURL(file[0])
                }
        }

    return (
        <div className="scroll_bg">
        <div className="New_student">
        <div className="form_student">
            <h2>information</h2>
            <button className="Close"  onClick={() => closeNew_stud(false)}></button>
                <input type="file" name="avatar" id="file" accept="image/*" onChange={preview}/>
                <div class="Divpreview">
                    <img id="preview" alt='profile'/>
                    <label for="file"><img src={add_img} alt="" className="add_img"/></label>
                </div>
                <label htmlFor="" className="Prenom">Prenom :</label><br />
                <input type="text" className="Prenom" onChange={(e)=>{
                    console.log(e.target.value) 
                    setlast_name(e.target.value)
                }}/><br />
                <label htmlFor="" className="Nom">Nom :</label><br />
                <input type="text" className="Nom" onChange={(e)=>{
                    console.log(e.target.value) 
                    setfirst_name(e.target.value)
                }}/><br />
                <label htmlFor="" className="Les_Parents">Les Parents :</label><br />
                <input type="text" className="Les_Parents" onChange={(e)=>{
                    console.log(e.target.value) 
                    setparent_name(e.target.value)
                }}/><br />
                <label htmlFor="" className="date_de_naissance">date de naissance :</label><br />
                <input type="date" className="date_de_naissance" onChange={(e)=>{
                    console.log(e.target.value) 
                    setbirth_date(e.target.value)
                }}/><br />
                <label htmlFor="" className="lieu_de_naissance">lieu de naissance :</label><br />
                <input type="text" className="lieu_de_naissance" onChange={(e)=>{
                    console.log(e.target.value) 
                    setbirth_place(e.target.value)
                }}/><br />
                <label htmlFor="" className="Sexe">Gender :</label><br />
                <select name="" id="selectsexe">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>                
                </select><br /><br />
                <span className="Contacts">=================   Contacts   =================</span><br /><br />
                <label htmlFor="" className="Email">Email :</label><br />
                <input type="text" className="Email" onChange={(e)=>{
                    console.log(e.target.value) 
                    setemail(e.target.value)
                }}/><br />
                <label htmlFor="" className="Tel_etud">Telephone de etudaint :</label><br />
                <input type="text" className="Tel_etud" onChange={(e)=>{
                    console.log(e.target.value) 
                    settel_stud(e.target.value)
                }}/><br />
                <label htmlFor="" className="Tel_par">Telephone de parent :</label><br />
                <input type="text" className="Tel_par" onChange={(e)=>{
                    console.log(e.target.value) 
                    settel_part(e.target.value)
                }}/><br /><br />
                <span className="info_Acd">========  Les informations Académique   ========</span><br /><br />
                <label htmlFor="" className="nivo">Niveau Académique:</label><br />
                <select name="" id="selectLevel" className="nivo" onChange={(e)=>{
                    console.log(e.target.value) 
                    setlevel_aca(e.target.value)
                }}>
                    <option value="zero" selected disabled>choisissez votre niveau éducatif:</option>
                    <optgroup label="Avant Primere">
                  <option value="Crèche">Crèche</option>
                  </optgroup>
                  <optgroup label="Primer">
                  <option value="1 er primaire">1 er annee primaire</option>
                  <option value="2 eme primaire">2 eme annee primaire</option>
                  <option value="3 eme primaire">3 eme annee primaire</option>
                  <option value="4 eme primaire">4 eme annee primaire</option>
                  <option value="5 eme primaire">5 eme annee primaire</option>
                  </optgroup>
                  <optgroup label="Moyen">
                  <option value="1 er annee moyen">1 er annee moyen</option>
                  <option value="2 eme annee moyen">2 eme annee moyen</option>
                  <option value="3 eme annee moyen">3 eme annee moyen</option>
                  <option value="4 eme annee moyen">4 eme annee moyen</option>
                  </optgroup>
                  <optgroup label="socondaire">
                  <option value="1 er annee secondaire">1 er annee secondaire</option>
                  <option value="2 eme annee secondaire">2 eme annee secondaire</option>
                  <option value="Bac">Bac</option>
                  </optgroup>
                  <optgroup label="universitaire">
                  <option value="Bac+1">Bac+1</option>
                  <option value="Bac+2">Bac+2</option>
                  <option value="Bac+3">Bac+3</option>
                  <option value="Bac+4">Bac+4</option>
                  <option value="Bac+5">Bac+5</option>
                  <option value="Doctorat">Doctorat</option>
                  </optgroup>
                </select><br /><br />
                <label htmlFor="" className="cour">Les Cours :</label><br />
                    <Multiselect className="Multiselect"
                    options={option} // Options to display in the dropdown
                    />              
                <br /><br />
                <span className="info_add">========  Les Information Additionnelle   ========</span><br /><br />
                <label htmlFor="" className="prblm_mental">problèmes de santé mentale :</label><br />
                <input type="text" className="prblm_mental" id="prblm_mental" onChange={(e)=>{
                    console.log(e.target.value) 
                    setmental_prob(e.target.value)
                }}/><br />
                <label htmlFor="" className="prblm_phy">problèmes de santé physique :</label><br />
                <input type="text" className="prblm_phy" id="prblm_phy" onChange={(e)=>{
                    console.log(e.target.value) 
                    setphysic_prob(e.target.value)
                }}/>

                    <div className="erorr">
                        <h3>read the books of guide</h3>
                    </div><br />
                    <input type="submit" value="Save" className="Save" onClick={addStudToDB}/>
                    </div>
        </div>
        </div>
    )
}

export default New_student
