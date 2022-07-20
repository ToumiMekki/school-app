import { useEffect , useState } from 'react';
import axios, * as others from 'axios'
import { AiFillDelete } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import swal from 'sweetalert';

function Total_cours() {
    const [Cours_list,setCoursList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:9000/readCours').then((response)=>{
            setCoursList(response.data)
  
        })
    })
    const deleteCours = (id)=>{
        if(window.confirm('You Want to delete '+' Classes') == true)
        {
        axios.delete('http://localhost:9000/deleteCours/'+id)
        swal("Cours has deleted")
        }
        else
        swal("you cancele delete Cours")
    }




    return (
        Cours_list.map((val)=>{
            return(
        <div className='Total_cours'>
            <button className='cours_delete' onClick={()=>deleteCours(val._id)}><AiFillDelete /></button>
            <button className='cours_update'><MdAddCircleOutline /></button> 
            
            <h4>{val.title_cours}</h4>
            <h5>Number of Student : 28 </h5>
            <h5>Number of Professeur : 28 </h5>
            <h5>{val.frais_Cours} Dzd / {val.dure_PayCours}</h5>
        </div>
        
    )}))}

export default Total_cours
