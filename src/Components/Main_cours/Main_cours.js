import Container from './container_cours'
import Total_cours from './Total_cours'
import add from '../../image/add.png'
import NewCours from './NewCours'
import { useState } from 'react'


function Main_cours() {

    const [OpenAddCours , setOpenAddCours] = useState(false);
    

    return (
        <div className="Main_cours">
            <h1>Total Cours :</h1><br />
            <Container Cours_name="analyse 2" Student_number=""
            Prof_number="" Prof_name="" Pay_duration=""
            Description=""/>
            <div className='cours'>
            <div className='Total_cours' onClick={()=>{setOpenAddCours(true)}}>
                <img src={add} alt="" />
                <h3>add New Cours</h3>
            </div>
                <Total_cours />
            </div>
            { OpenAddCours && <NewCours closeNewCours={setOpenAddCours}/>}    
        </div>
        
    )
}

export default Main_cours
