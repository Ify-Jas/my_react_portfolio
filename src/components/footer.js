import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Footer(){
    return (
        <footer>
            <div className='icons'>
                
               <FontAwesomeIcon icon="fa-solid fa-envelope" />
               <FontAwesomeIcon icon="fa-brands fa-github" />
               <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </div>
           <p>© Ifeoma Ezeoke Company</p> 
        </footer>
    )
}

export default Footer;