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
        </ul>
        </div>
        <div className="contactme">
           <button>
           <a href='#contact'> Contact me</a>
            </button> 
        </div>
        
      </div>
    </div>
  )
}

export default Nav;
