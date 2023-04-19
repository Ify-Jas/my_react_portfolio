import { useState } from "react";


function Contact(){
    const[contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
       access_key: '69a99131-06c1-49cd-a6da-29cdb9a89140'
    });
    const handleChange =(event)=>{
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
       if(!contactData.name.length || !contactData.email.length){
        alert('Please enter your name or email🥰')
       }else {
        const data = JSON.stringify(contactData);
        fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        },
        body: data,


      })
      .then(res => res.json())
      .then((data)=>{
        console.log(data);
        alert('Email Sent Successfully');
        setContactData({
            ...contactData,
            name: '',
            email: '',
            message: ''
        })
      })

       }
        
    }
    return (
        <section className='contact'>
            <div className='form'>
               <h1>Contact Me</h1>
               <input 
               type='text' 
               placeholder='Your Name' 
               onChange={handleChange}
               value={contactData.name} 
               name='name'/>

               <input 
               type='text' 
               placeholder='Your Email' 
               onChange={handleChange}
               value={contactData.email} 
               name='email' />

               <textarea 
               placeholder='Your Message' 
               className='messageBox' 
               onChange={handleChange}
               value={contactData.message} 
               name='message'></textarea>


               <button 
               className='btnContact'
               onClick={handleSubmit}>Submit</button>         
            </div>
            <div className="smLinks">
                <h1>Contact Links</h1>
                <a target='_blank' rel="noreferrer"  href="https://github.com/Ify-Jas">Github</a>
                <a target='_blank' rel="noreferrer"  href='https://linkedin.com/in/ifeoma-ezeoke'>LinkedIn</a>
                <a href="mailto:ify.frontend@gmail.com?"> Email</a>
                <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1_i_IDEGHmztHs3D0KuDO7bLDNsJco6-i/view?usp=share_link'>Curriculum Vitae</a>


            </div>
        </section>
        
    )
}


export default Contact;