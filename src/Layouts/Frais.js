import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import Main_frais from '../Components/Main_frais/Main_frais'


function Frais() {
    return (
        <div className="Frais">
            <Navbar />
            <Sidebar />
            <Main_frais />
            <Footer />
        </div>
    )
}

export default Frais
