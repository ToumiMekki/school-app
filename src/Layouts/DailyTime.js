import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import Main_Daily from '../Components/DailyTime/Main_Daily'


function DailyTime() {
    return (
        <div className="DailyTime">
            <Navbar />
            <Sidebar />
            <Main_Daily />
            <Footer />
        </div>
    )
}

export default DailyTime
