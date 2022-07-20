import { useEffect , useState } from 'react';
import axios, * as others from 'axios'
import New_student from './Access_modal/New_student';



function Student_info(props) {

    const [Stud_list,setStudList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:9000/readStudent').then((response)=>{
           setStudList(response.data)
  
        })
    })

    const deleteStudent = (id)=>{
        axios.delete('http://localhost:9000/deleteStudents/'+id)
        alert('You Want to delete This Student')

    }
    return (

        Stud_list.map((val)=>{
            return(
            <tr className="tr-two">
                <td><img src="" alt='profile'/></td>
                <td>{val.last_name}</td>
                <td>{val.first_name}</td>
                <td>statut</td>
                <td>Last_pay</td>
                    <td>
                    <button onClick={()=>deleteStudent(val._id)}>delete</button>
                    <button>update</button>
                    </td>
            </tr>
    )
    })
)
}
export default Student_info
