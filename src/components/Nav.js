import whiteLogo from '../images/black_white_bumble_bee.png'
import colorLogo from '../images/Honey_Bee_logo-removebg-preview.png'

const Nav = ({ authToken, minimal, setShowModal,showModal,setIsSignUp}) => {

    const handleClick=() => {
        setShowModal(true)
        setIsSignUp(false)
    }


    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="logo"/>
            </div>

            {!authToken && !minimal && (
                <button
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
            >LOG IN</button>)}
        </nav>
    )
}
export default Nav