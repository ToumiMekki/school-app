import React from "react"

// ============ dark Mode  Start=================================
const bodyEL = document.querySelector('body')
//Get the value of the dark item from the local storage
let setfullMode = localStorage.getItem('full')

const fullMode = () =>{
    bodyEL.classList.toggle('full')
}

const screen = function toggle(){
        //get the value of the dark item from the local strogae on every click
        setfullMode = localStorage.getItem('full')
        if(setfullMode !=="on"){
            fullMode()
        //set the value of the item to "on" when dark mode in on
        setfullMode = localStorage.setItem('full','on')
        }else{
            fullMode()
            //set the value of the item to "null" when dark mode in off
            setfullMode = localStorage.setItem('full',null)
        }
}
if(setfullMode === 'on'){
    fullMode();
}
// ============ dark Mode  end=================================

export default screen