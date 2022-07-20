import logo from '../../image/logo.png'
function Footer() {
    const Years =new Date().getFullYear();
    return (
        <div className="Footer">
            <logo><img src={logo} alt="Logo"/></logo>
            <h5 className="Copyright">Copyright &copy; {Years} ,GlitchX Digita Solution</h5>
        </div>
    )
}

export default Footer
