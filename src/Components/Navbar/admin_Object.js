import { AiFillDelete } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";

function admin_Object(props) {
    const {image_link,Admin_fullName}=props
  return (
  
        <div className="admin_Object">
            <img src={image_link} alt="" className="admin_image"/>
            <h4>{Admin_fullName}</h4>
            <button><AiFillDelete /></button>
            <button><MdAddCircleOutline /></button>
        </div>
    )}

export default admin_Object;
