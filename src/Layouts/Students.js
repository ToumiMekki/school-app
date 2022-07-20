import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import Main_Stud from '../Components/Main-Stud/Main_Stud'

function Students() {
    return (
        <div className="Students">
            <Navbar/>
            <Sidebar/>
            <Main_Stud />
            <Footer/>
        </div>
    )
}

export default Students
