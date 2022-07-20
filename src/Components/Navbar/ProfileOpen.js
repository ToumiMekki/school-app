
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Admin_Object from "./admin_Object";
import add from '../../image/add.png'
import New_admin from './AdminModel/New_admin'
import { useState } from "react";
import pf from '../../image/001.jpg'

function ProfileOpen({closeProfile}) {

    const [OpenAddAdmin,setOpenAddAdmin]=useState(false)

    return (
        <div className="ProfileOpen">
            <button className="close_Admin" onClick={()=>closeProfile(false)}></button>
            <h2>administrateurs</h2>
        <div className="display_admin">
            <div className="admin_Object" onClick={()=>setOpenAddAdmin(true)}>
                <img src={add} alt="" />
                <h3>Ajouter Admin</h3>
            </div>
                <Admin_Object image_link="" Admin_fullName="Toumi Ammar mekki" image_link={pf}/>
                <Admin_Object image_link="" Admin_fullName="Toumi Ammar mekki" image_link={pf}/>
                <Admin_Object image_link="" Admin_fullName="Toumi Ammar mekki" image_link={pf}/>
                <Admin_Object image_link="" Admin_fullName="Toumi Ammar mekki" image_link={pf}/>
                <Admin_Object image_link="" Admin_fullName="Toumi Ammar mekki" image_link={pf}/>
                <Admin_Object image_link="" Admin_fullName="Toumi Ammar mekki" image_link={pf}/>
        </div>
        { OpenAddAdmin && <New_admin Close_Admin={setOpenAddAdmin}/>}
        </div>
    )
}

export default ProfileOpen
