import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import Main_prof from '../Components/Main-Prof/Main_prof'

function Professeurs() {
    return (
        <div className="Professeurs">
            <Navbar />
            <Sidebar />
            <Main_prof />
            <Footer />
        </div>
    )
}

export default Professeurs
