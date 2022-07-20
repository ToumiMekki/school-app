import Container_class from './Container_class'
import add from '../../image/add.png'
import New_class from './New_class'
import { useState } from 'react'



function Main_classes() {

    const [OpenAddClasse , setOpenAddClasse] = useState(false);

    return (
        <div className="Main_classes">
            <h1 className='title_class'>Tous les Classes</h1>
            <div className='statut_class_nav'>
            <h4>Vide <button className='Vide'></button>Réservé <button className='Complet'></button></h4>
            </div>
            <div className="BigContainer_classes">
            <div className="Container_class1" onClick={()=>{setOpenAddClasse(true)}}>
                <img src={add} alt="add"/>
                <h2>Ajouter Classe</h2>
            </div>
            <Container_class />
            </div>
            { OpenAddClasse && <New_class closeNewclass={setOpenAddClasse}/>}    
        </div>
    )
}

export default Main_classes
