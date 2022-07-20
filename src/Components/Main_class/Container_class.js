import { useEffect , useState } from 'react';
import axios, * as others from 'axios'
import { AiFillDelete } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import swal from 'sweetalert';


function Container_class(props) {

    const {Class_name,Max_number,Descreption,Statut}=props

    const [Classes_list,setClasses_list] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:9000/readClasses').then((response)=>{
            setClasses_list(response.data)
  
        })
    })
    const deleteClasses = (id)=>{
        if(window.confirm('You Want to delete '+ Classes_list.Class_name +' Classes') == true)
        {axios.delete('http://localhost:9000/deleteClasses/'+id)
        swal("classe has deleted")}
        else
        swal("you cancele delete classe")
    }

 return(
    Classes_list.map((val)=>{
        return (
            <div className="Container_class">
                <button className='cours_delete' onClick={()=>deleteClasses(val._id)}><AiFillDelete /></button>
                <button className='cours_update'><MdAddCircleOutline /></button>
                <h2>{val.Class_name}</h2>
                <h4>Max Etudaints : {val.Max_number}</h4>
                <h3>status</h3>
            </div>
)}))}

export default Container_class
