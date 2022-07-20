
function container_cours(props) {

    const {Cours_name,Student_number,Prof_number,Prof_name,Pay_duration,Description}= props

    return (
        <div className="container_cours">
            <h2 className="title">{Cours_name}</h2>
            <h3 className="Total_student">Total Students Number : <br />{Student_number}</h3>
            <h3 className="Proffesseur_number">Total Proffeseurs Number : <br />{Prof_number}</h3>
            <h4 className="Proffesseur_Name">Tous Proffeseurs : <br />{Prof_name}</h4>
            <h4 className="Paiement_dure">paiement dure : <br />{Pay_duration}</h4>
            <h5 className="Description">Description : <br />{Description}</h5>
        </div>
    )
}

export default container_cours
