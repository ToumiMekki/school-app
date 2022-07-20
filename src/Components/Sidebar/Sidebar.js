import React from 'react'
import home from '../../image/home.png'
import student from '../../image/student.png'
import teacher from '../../image/teacher.png'
import books from '../../image/books.png'
import wenibar from '../../image/wenibar.png'
import meny from '../../image/meny.png'
import staffs from '../../image/team.png'
import calendar from '../../image/calendar.png'
import logo from '../../image/logo new.png'

function Sidebar() {
    const Dash = function Load_dash(){
        window.location.pathname = '/dash'
    }
    const stud = function Load_stud(){
        window.location.pathname = '/students'
    }
    const prof = function Load_prof(){
        window.location.pathname = '/professeurs'
    }
    const staff = function Load_prof(){
        window.location.pathname = '/staff'
    }

    const cour = function Load_cour(){
        window.location.pathname = '/cours'
    }
    const classes = function Load_classes(){
        window.location.pathname = '/classes'
    }
    const frais = function Load_frais(){
        window.location.pathname = '/frais'
    }
    const DailyTime = function Load_DailyTime(){
        window.location.pathname = '/DailyTime'
    }


    return (
        
        <div className="sideBar">
            <img src={logo} alt="" className='logo'/>
            <h6 className='logoName'>School management System</h6>
            <ul className='Side'>
                <li><button onClick={Dash}><img src={home} alt="" />Dashboard</button></li>
                <li><button onClick={stud}><img src={student} alt="" />Etudiantes</button></li>
                <li><button onClick={prof}><img src={teacher} alt="" />Professeurs</button></li>
                <li><button onClick={staff}><img src={staffs} alt="" />Staffs</button></li>
                <li><button onClick={cour}><img src={books} alt="" />Cours</button></li>
                <li><button onClick={classes}><img src={wenibar} alt="" />Classes</button></li>
                <li><button onClick={frais}><img src={meny} alt="" />frais</button></li>
                <li><button onClick={DailyTime}><img src={calendar} alt="" />Daily Time</button></li>

            </ul>
        </div>
    )
}

export default Sidebar
