function Finance_info(props) {
    const {id,Nom,Values, Date_Trans,Type, Descreption}=props;

    return (
        <tr className="tr-tw">
            <td>{id}</td>
            <td>{Nom}</td>
            <td>{Values} Dzd</td>
            <td>{Date_Trans}</td>
            <td className="descr">{Descreption}</td>
            <td><input type="checkbox" name="" id="" /></td>
        </tr>
    )
}

export default Finance_info
