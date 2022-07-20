import React from 'react'

// ============ dark Mode  Start=================================
const bodyEL = document.querySelector('body')
//Get the value of the dark item from the local storage
let setDarkMode = localStorage.getItem('dark')

const darkMode = () =>{
    bodyEL.classList.toggle('dark')
}

const Dark_mode = function toggle(){
        //get the value of the dark item from the local strogae on every click
        setDarkMode = localStorage.getItem('dark')
        if(setDarkMode !=="on"){
            darkMode()
        //set the value of the item to "on" when dark mode in on
        setDarkMode = localStorage.setItem('dark','on')
        }else{
            darkMode()
            //set the value of the item to "null" when dark mode in off
            setDarkMode = localStorage.setItem('dark',null)
        }
}
if(setDarkMode === 'on'){
    darkMode();
}
// ============ dark Mode  end=================================



export default Dark_mode
