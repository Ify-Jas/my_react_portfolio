import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCodeCompare, faLink } from '@fortawesome/free-solid-svg-icons'




function Footer(){
    return (
        <footer>
            <div>
              <div className='ic'>
                 <a href='mailto:ify.frontend@gmail.com?'><FontAwesomeIcon size='2x' icon={faEnvelope} /></a>
                 <a href='https://github.com/Ify-Jas'><FontAwesomeIcon size='2x' icon={faCodeCompare} /></a>
                 <a href='https://linkedin.com/in/ifeoma-ezeoke'><FontAwesomeIcon size='2x' icon={faLink} /></a>
              </div>
              <p>© Ifeoma Ezeoke Company</p> 

            </div>
            
        </footer>
    )
}

export default Footer;