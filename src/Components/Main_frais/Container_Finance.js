import Finance_info from "./Finance_info"
function Container_Finance(props) {
    const {Title_frais}=props
    return (
        <div className="Container_Finance">
                        <h3>{Title_frais}</h3>
            <form action="">
                <input type="search" placeholder="Recharcher"/>
                <select name="" id="">
                    <option value="">Nom de Transaction</option>
                    <option value="">Valeurs</option>
                    <option value="">Date</option>
                    <option value="">Type</option>
                </select>
            </form>
            <table>
                <tr className="tr-on">
                    <td>#</td>
                    <td>Le Nom</td>
                    <td>Valeurs</td>
                    <td>Date de Transaction</td>
                    <td>Descreption</td>
                    <td>check</td>
                </tr>
                <Finance_info id="1" Nom="acheter impriment" Values="45000" Date_Trans="03/04/2022"  Descreption="lLorem ipsum dolor sit amet consectetur adipisicing elit."/>
            </table>

        </div>
    )
}

export default Container_Finance
