import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import Main_cours from '../Components/Main_cours/Main_cours'


function Cours() {
    return (
        <div className="Cours">
            <Navbar />
            <Sidebar />
            <Main_cours />
            <Footer />
        </div>
    )
}

export default Cours
