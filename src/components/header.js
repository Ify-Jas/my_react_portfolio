import {NavLink} from 'react-router-dom';
function Header(){
    return (
        <header>
          <nav>
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/portfolio'>Portfolio</NavLink>
            <NavLink className='link' to='/stack'>Stack</NavLink>
            <NavLink className='link' to='/contact'>Contact</NavLink>
          
          </nav>  
        </header>
    )
}


export default Header;