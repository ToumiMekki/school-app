import Student_info from './Student_info';
import { useEffect , useState } from 'react';
import axios, * as others from 'axios'

function Container_etudpay() {

    const [Stud_list,setStudList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:9000/readStudent').then((response)=>{
           setStudList(response.data)
  
        })
    })

    return (
        
        <div className="Container_etudpay">
            <h3>Les étudiants qui n'ont pas payé</h3>
            <table className="table">
                <tr className="tr-one">
                    <th>#</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Statut</th>
                    <th>Dernier Paiement</th>
                    <th>Action</th>
                </tr>
                    <Student_info/>
             </table>
        </div>
    )
}

export default Container_etudpay
