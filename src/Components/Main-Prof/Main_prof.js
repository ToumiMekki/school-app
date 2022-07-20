import Container_Prof from './Container_Prof'
import Total_prof from './Total_prof'
import New_Teacher from './Modal_NewProf/New_Teacher'


function Main_prof() {



    return (
        <div className="Main_prof">
            <div>
            <h2>Nomber des Etudiants par levels :</h2><br />
            <Container_Prof title_prof="Total_Prof in the School" num_prof="25"/>
            <Container_Prof title_prof="Total_Prof Work today" num_prof="10"/>
            </div>
            <Total_prof/>
        </div>
    )
}

export default Main_prof
