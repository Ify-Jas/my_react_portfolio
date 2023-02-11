
function Contact(){
    return (
        <section className='contact'>
            <div className='form'>
               <h1>Contact Me</h1>
               <input type='text' placeholder='Your Name' />
               <input type='text' placeholder='Your Email' />
               <textarea placeholder='Your Message' className='messageBox'></textarea>
               <button className='btnContact'>Submit</button>         
            </div>
            <div className="smLinks">
                <h1>Contact Links</h1>
                <a target='_blank'  href="https://github.com/Ify-Jas">Github</a>
                <a target='_blank'  href='https://linkedin.com/in/ifeoma-ezeoke'>LinkedIn</a>
                <a href="mailto:ify.frontend@gmail.com?"> Email</a>
                <a target='_blank'  href='https://drive.google.com/file/d/1uSRJ6sn_vQDlqLnudqX51dEol2-yUa7-/view?usp=share_link'>Curriculum Vitae</a>


            </div>
        </section>
        
    )
}


export default Contact;