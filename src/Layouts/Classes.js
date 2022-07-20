import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import Main_classes from '../Components/Main_class/Main_classes'


function Classes() {
    return (
        <div className="Classes">
            <Navbar />
            <Sidebar />
            <Main_classes />
            <Footer />
        </div>
    )
}

export default Classes
