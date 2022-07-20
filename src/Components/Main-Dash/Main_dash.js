import React from 'react'
import Container_Total from '../Main-Dash/Container_Total'
import Speed_access from '../Main-Dash/Speed_access' 
import Container_etudpay from './Container_etudpay'
import Daily_Pointing from './Daily_Pointing'
import { useEffect , useState } from 'react';
import axios, * as others from 'axios'


function Main_dash() {

    const [Stud_list,setStudList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:9000/readStudent').then((response)=>{
           setStudList(response.data)
  
        })
    })
    const [prof_list,setprof_list] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:9000/readTeacher').then((response)=>{
            setprof_list(response.data)
  
        })
    })


    return (
        <div className="Main_dash">
            <h1>Dashboard</h1>
            <div className="Container_Total">
            <ul>
            <li><Container_Total   title="Total Professeurs"  number={prof_list.length}/></li>
            <li><Container_Total   title="Total Étudiantes"  number={Stud_list.length}/></li>
            <li><Container_Total   title="Total Frais"  number="230000 dzd"/></li>
            <li><Container_Total   title="Total revenu"  number="540000 dzd"/></li>
            <li><Container_Total   title="benefit"  number="310000 dzd"/></li>
            </ul>
            </div>
            <hr />
            <div className="speed_daily">
                <Speed_access />
                <Container_etudpay />
                <Daily_Pointing />
            </div>
        </div>
    )
}

export default Main_dash
