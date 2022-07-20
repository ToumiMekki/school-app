import add_img from "../../../image/add.png"

function New_admin({Close_Admin}) {
  return (
        <div className="New_admin">
            <br />
            <h1>New Admin information</h1>
            <button id="closeNewAdmin" onClick={()=>Close_Admin(false)}></button>
            <br />
            <form action="">
                <div class="Divpreview1">
                    <img id="preview1" alt='profile'/>
                    <label for="file" className="add_img1"><img src={add_img} alt=""/></label>
                </div>
                <input type="text" name="" id=""  placeholder="Nom d'utilisateur"/><br />
                <input type="text" name="" id="" placeholder="Email address"/><br />
                <input type="text" name="" id="" placeholder="password"/><br />
                <input type="text" name="" id="" placeholder="full Name"/><br />
                <input type="submit" value="Save" />
            </form>
        </div>
)}
export default New_admin;
