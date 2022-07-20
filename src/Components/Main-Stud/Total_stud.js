import React from 'react'
import TotalStud_info from './totalStud_info'
import add from '../../image/add.png'
import update from '../../image/remove.png'
import remove from '../../image/updating.png'
import money from '../../image/top-up.png'
import New_student from '../Main-Dash/Access_modal/New_student'
import { useEffect , useState } from 'react';
import axios, * as others from 'axios'
import Paiment_etud from '../Main-Dash/Access_modal/Paiment_etud'

function Total_stud() {

    const [Stud_list,setStudList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:9000/readStudent').then((response)=>{
           setStudList(response.data)
  
        })
    })

    const d = new Date();
    const year = d.getFullYear(); 
    const i=1;


    const [OpenNew_Stud ,setOpenNew_Stud] = useState(false);
    const [OpenPaiment_stud ,setOpenPaiment_stud] = useState(false);


    return (
        <div>
        <div className="Total_stud">
            <h3>Les Etudaints</h3>
            <form action="">
                <input type="search" placeholder="Recharcher"/>
                <select name="" id="">
                    <option value="">Nom</option>
                    <option value="">Prenom</option>
                    <option value="">Sexe</option>
                    <option value="">Date</option>
                </select>                
            </form>
            <button onClick={() =>{setOpenNew_Stud(true);}}><img src={add} alt="" /></button>              
                <button><img src={update} alt="" /></button>              
                <button><img src={remove} alt="" /></button>              
                <button onClick={() =>{setOpenPaiment_stud(true);}}><img src={money} alt="" /></button>  
            <table>
                <tr className="tr-on">
                    <td>#</td>
                    <td>Nom</td>
                    <td>Prenom</td>
                    <td>Sexe</td>
                    <td>Les Groups</td>
                    <td>Frais Scolaire</td>
                    <td>Status</td>
                    <td>check</td>
                </tr>
                {Stud_list.map((val,key)=>{
                   return(
                    <TotalStud_info 
                        Id="meki"
                        Nom={val.last_name} 
                        Prenom={val.first_name}
                        Sexe="male"
                        stud_frais="meki"
                        stud_group="meki"
                        Stud_anneeScol={year}/>
                    ) 
                })}
            </table>
        </div>

        { OpenNew_Stud && <New_student closeNew_stud={setOpenNew_Stud}/>}    
        { OpenPaiment_stud && <Paiment_etud closePay_stud={setOpenPaiment_stud}/>}    

        </div>
        
    )
}

export default Total_stud
