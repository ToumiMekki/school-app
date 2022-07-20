import { useEffect , useState } from 'react';
import axios, * as others from 'axios'



function Prof_info() {
    const [prof_list,setprof_list] = useState([])
    const [check_prof,setcheck_prof]=useState(false)

    useEffect(()=>{
        axios.get('http://localhost:9000/readTeacher').then((response)=>{
            setprof_list(response.data)
  
        })
    })

    const deleteProf = (id)=>{
        axios.delete('http://localhost:9000/deleteTeachers/'+id)
        alert('You Want to delete This Teacher')
    }
    return(
        prof_list.map((val)=>{
    return (
        <tr className="tr-tw">
            <td><img src="" alt="" /></td>
            <td>{val.last_name}</td>
            <td>{val.first_name}</td>
            <td>{val.gender}</td>
            <td>date</td>
            <td>stud_group</td>
            <td>stud_frais</td>
            <td><input type="checkbox" name="" id="" /></td>
        </tr>
     )
    })
)
}

export default Prof_info
