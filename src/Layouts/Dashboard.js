import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Main_dash from '../Components/Main-Dash/Main_dash' 
import Footer from '../Components/Footer/Footer'
import "../Components/Main.css"

function Dashboard() {
    return (
        <div ClassName="Dashboard">
            <Navbar />
            <Sidebar />
            <Main_dash />
            <Footer />
        </div>
    )
}

export default Dashboard
