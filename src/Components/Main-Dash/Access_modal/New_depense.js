
function New_depense({closeNew_depense}) {
  return (
        <div className="New_depense">
            <button onClick={() => closeNew_depense(false)}></button>
            <h2>Nouvelle Depense</h2>
            <label htmlFor="">Depense Titre :</label><br />
            <input type="text" className="Name_depense" placeholder="Depense Titre"/><br />
            <label htmlFor="">la Valeur de Depense :</label><br />
            <input type="text" name="" id="Depense_Values" maxLength='7' placeholder="1000/Dzd"/><br />
            <label htmlFor="">la descreption de Depense :</label><br />
            <textarea name="" id="" cols="30" rows="10" className="descreption_NewDepense"
            placeholder="descreption de Depense ..."
            ></textarea>
            <input type="submit" value="Save" />
        </div>
    )}

export default New_depense;
