import './App.css'
function CloseBar() {

    var winclose = function () {
        window.close();
    }

var winmaximize = function () {
        window.moveTo(0, 0);
        window.resizeTo(window.screen.width, window.screen.height);
    }

    return (
        <div className="CloseBar">
            <button className="btn_clsBar1" onClick={winclose}></button>
            <button className="btn_clsBar2" onClick={winmaximize}></button>
        </div> 
    )
} 

export default CloseBar
