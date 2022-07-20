import add_img from "../../../image/add.png"
import axios, * as others from 'axios'
import { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import { Placeholder } from "react-bootstrap";
import swal from 'sweetalert';



function New_Teacher({closeModal}) {
    const [first_name,setfirst_name]=useState('')
    const [last_name,setlast_name]=useState('')
    const [salary_prof,setsalary_prof]=useState('')
    const [birth_date,setbirth_date]=useState('')
    const [birth_place,setbirth_place]=useState('')
    const [gender,setgender]=useState('')
    const [email,setemail]=useState('')
    const [tel_tea,settel_tea]=useState('')
    const [level_aca,setlevel_aca]=useState('')
    const [mental_prob,setmental_prob]=useState('')
    const [physic_prob,setphysic_prob]=useState('')

    const addStudToDB = ()=>{
        axios.post("http://localhost:9000/createTeacher",{

            first_name:first_name,
            last_name:last_name,
            salary_Prof:salary_prof,
            birth_date:birth_date,
            birth_place:birth_place,
            gender:gender,
            email_tea:email,
            tel_tea:tel_tea,
            level_aca:level_aca,
            mental_prob:mental_prob,
            physic_prob:physic_prob,
        
        })
        closeModal(false)
        swal("enseignant "+ first_name +' '+ last_name +" ajouter success")

    
    }

        const preview = function previewImage(){
                var file = document.getElementById("file").files
                if (file.length > 0){
                    var fileReader = new FileReader();
                    fileReader.onload = function (event){
                    document.getElementById("preview").setAttribute("src" , event.target.result);
                    };fileReader.readAsDataURL(file[0]) }}
        const options = [
            { label: "Grapes", value: "grapes" },
            { label: "Mango", value: "mango" },
            { label: "Strawberry", value: "strawberry"},
          ];
          
            const [selected, setSelected] = useState([]);

            

    return (
        <div className="scroll_bg">
        <div className="New_student">
        <div className="form_student">
            <h2>information</h2>
            <button className="Close"  onClick={() => closeModal(false)}></button>
                <input type="file" name="avatar" id="file" accept="image/*" onChange={preview}/>
                <div class="Divpreview">
                    <img id="preview" alt='profile'/>
                    <label for="file" className="add_img"><img src={add_img} alt=""/></label>
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
                <label htmlFor="" className="salaire">Le salaire de Professeur :</label><br />
                <input type="text" className="salaire" placeholder="45000/Dzd" maxLength='7' onChange={(e)=>{
                    console.log(e.target.value) 
                    setsalary_prof(e.target.value)
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
                <select name="" id="selectsexe"
                        onChange={(event) => setgender(event.target.value)}
                >
                    <option value="zero" disabled selected>choisissez votre gender:</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br /><br />
                <span className="Contacts">=================   Contacts   =================</span><br /><br />
                <label htmlFor="" className="Email">Email :</label><br />
                <input type="text" className="Email" onChange={(e)=>{
                    console.log(e.target.value) 
                    setemail(e.target.value)
                }}/><br />
                <label htmlFor="" className="Tel_etud">Téléphone de Professeur :</label><br />
                <input type="text" className="Tel_etud" onChange={(e)=>{
                    console.log(e.target.value) 
                    settel_tea(e.target.value)
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
                        <MultiSelect className="selectcours1"
                            options={options}
                            value={selected}
                            labelledBy="Select"
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
                        <h4 className="err"></h4>
                        <h3>read the books of guide</h3>
                    </div><br />
                    <input type="submit" value="Save" className="Save" onClick={addStudToDB}/>
                    </div>
        </div>
        </div>
    )
}

export default New_Teacher
