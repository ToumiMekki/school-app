import Prof_info from './Prof_info'
import New_Teacher from './Modal_NewProf/New_Teacher'
import add from '../../image/add.png'
import update from '../../image/remove.png'
import remove from '../../image/updating.png'
import money from '../../image/top-up.png'
import { useState } from 'react'
import Paiment_prof from '../Main-Dash/Access_modal/paiment_prof'


function Total_prof() {

    const [isOpenProf,setisOpenProf]=useState(false)
    const [Open_paimentProf,setOpen_paimentProf]=useState(false)


    return (
        <div className="Total_prof">
            <h3>Les Proffeseurs</h3>
            <form action="" className='Total_prof_form'>
                <input type="search" placeholder="Recharcher"/>
                <select name="" id="">
                    <option value="">Nom</option>
                    <option value="">Prenom</option>
                    <option value="">Sexe</option>
                    <option value="">Date</option>
                </select>
            </form>
            <button onClick={()=>{setisOpenProf(true)}}><img src={add} alt="" /></button>              
                <button><img src={update} alt="" /></button>              
                <button><img src={remove} alt="" /></button>              
                <button onClick={()=>{setOpen_paimentProf(true)}}><img src={money} alt="" /></button>  
            <table>
                <tr className="tr-on">
                    <td>#</td>
                    <td>Nom</td>
                    <td>Prenom</td>
                    <td>Sexe</td>
                    <td>Année scolaire</td>
                    <td>Les Groups</td>
                    <td>Les Frais Scolarité</td>
                    <td>check</td>
                </tr>
                <Prof_info/>
            </table>
                    { isOpenProf && <New_Teacher closeModal={setisOpenProf}/>}
                    { Open_paimentProf && <Paiment_prof closePay_prof={setOpen_paimentProf}/>}

        </div>
    )}

export default Total_prof
