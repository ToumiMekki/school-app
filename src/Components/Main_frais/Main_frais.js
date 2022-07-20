import Container_Frais_small from "./Container_Frais_small"
import Container_Finance from "./Container_Finance"


function Main_frais() {
    return (
        <div className="Main_frais">
            <h1>La Finance</h1>
            <Container_Frais_small Title_frais="Dépenses" Money_day="10000" Money_7days="70000" Money_30days="40000"/>
            <Container_Frais_small Title_frais="Bénéfices" Money_day="20000" Money_7days="140000" Money_30days="500000"/>
            <Container_Frais_small Title_frais="Le Revenu" Money_day="20000" Money_7days="140000" Money_30days="500000"/>
        
            <Container_Finance />

        </div>
    )
}

export default Main_frais
