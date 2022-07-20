import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import swal from 'sweetalert';




function SettingOpen({closeSetting}) {

    const Logout=()=>{
        if(window.confirm('You Want to Logout') == true)
        {
            window.location.pathname = '/'
        }
        else{
            swal("Vous Anuller Logout")
            closeSetting(false)
        }
    }

    return (
        <div className="SettingOpen">
            <ul>
                <li onClick={()=>{window.location.pathname = '/Setting'}}><MdOutlinePersonAddAlt1/>Setting</li>
                <li onClick={Logout}><CgProfile/> Logout</li>
            </ul>
        </div>
    )
}

export default SettingOpen
