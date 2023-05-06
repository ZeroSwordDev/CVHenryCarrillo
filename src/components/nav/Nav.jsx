import './Nav.scss';


const Nav = () => {
  return (
    <div className='container' id="nav">
      <div className="menu">
        <div className="logo">
            <h1>Folio<span>.</span></h1>
        </div>
        <div className="menu-icons">
        <ul className='links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#portafolio'>Portafolio</a></li>
            <li><a href='#works'>Works</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        </div>
        <div className="contactme">
            <button>Contact me</button>
        </div>
        
      </div>
    </div>
  )
}

export default Nav;
