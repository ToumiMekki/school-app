import Services from '../../image/Services.png'
import Profile_image from '../../image/man.png'
import Darkmode from '../../image/night.png'
import lightmode from '../../image/brightness.png'
import menu from '../../image/menu.png'
import screen from '../Sidebar/screen'
import Dark_mode from './dark_mode'
import {useEffect,useState,useRef}  from 'react'
import ProfileOpen from './ProfileOpen'
import SettingOpen from './SettingOpen'
import New_admin from './AdminModel/New_admin'
import English from '../../image/English.png'
import France from '../../image/france.png'
import Arabic from '../../image/algeria.png'






function Navbar() {


        const [OpenProfile,setOpenProfile]=useState(false)
        const [OpenSetting,setOpenSetting]=useState(false)

        const ref = useRef()
        useEffect(()=>{
            const checkifClickedOutside = (e)=>{
                if(OpenProfile && ref.current && !ref.current.contains(e.target)){
                    setOpenProfile(false)
                }
            }
            document.addEventListener("clolick",checkifClickedOutside)
            return()=>{
                document.removeEventListener("click",checkifClickedOutside)

            }
        },[])

        const ClickSetting = ()=>{
            setOpenSetting((OpenSetting)=>!OpenSetting);
            setOpenProfile(false);
        }
        const ClickProfile = ()=>{
            setOpenProfile((OpenProfile)=> !OpenProfile)
            setOpenSetting(false);
        }

    const NameProfile="Toumi Ammar Mekki";
    return (
        
        <div>
            <div className="Navbar">
            <ul>
                <li className="item1"
                    onClick={ClickSetting}                
                ><img src={Services} alt="" className="Services"/></li>
                <li className="item2"
                    onClick={ClickProfile}                
                ><img src={Profile_image} alt=""  className="img_profile"/></li>
                <li className="item3"><img src={lightmode} alt="" className="light-mode-img"/>
                        <label class="switch">
                        <input type="checkbox"  id="check" onClick={Dark_mode}/>
                        <span class="slider round"></span>
                        </label>
                        <img src={Darkmode} alt="" className="dark-mode-img"/>
                </li>
                <li className="item4"><h4>{NameProfile}</h4></li>
                <li className="item5" onClick={screen}><img src={menu} alt="" className="menu"/></li>
                <li className="item6" onClick={screen}><img src={English} alt="" className="english"/></li>
                <li className="item6" onClick={screen}><img src={France} alt="" className="english"/></li>
                <li className="item6" onClick={screen}><img src={Arabic} alt="" className="english"/></li>

            </ul>
            </div>

            { OpenProfile && <ProfileOpen closeProfile={setOpenProfile}/>}
            { OpenSetting && <SettingOpen closeSetting={setOpenSetting}/>}

        </div>
    )
}

export default Navbar
