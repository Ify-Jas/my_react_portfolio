import {NavLink} from 'react-router-dom';

function Header(){
    return (
        <header>
          <nav>
            <NavLink className='link' to='/my_react_portfolio/'>Home</NavLink>
            <NavLink className='link' to='/my_react_portfolio/about'>About</NavLink>
            <NavLink className='link' to='/my_react_portfolio/portfolio'>Portfolio</NavLink>
            <NavLink className='link' to='/my_react_portfolio/stack'>Stack</NavLink>
            <NavLink className='link' to='/my_react_portfolio/contact'>Contact</NavLink>
          
          </nav>  
        </header>
    )
}


export default Header;