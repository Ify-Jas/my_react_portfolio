import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';





function Footer(){
    return (
        <footer>
            <div>
              <div className='ic'>
                 <a href='mailto:ify.frontend@gmail.com?'><FontAwesomeIcon size='2x' icon={faEnvelope} /></a>
                 <a href='https://github.com/Ify-Jas'><FontAwesomeIcon size='2x' icon={faGithub} /></a>
                 <a href='https://linkedin.com/in/ifeoma-ezeoke'><FontAwesomeIcon size='2x' icon={faLinkedin} /></a>
              </div>
              <p>© Ifeoma Ezeoke Company</p> 

            </div>
            
        </footer>
    )
}

export default Footer;