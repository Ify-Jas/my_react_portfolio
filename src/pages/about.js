import pic from "../images/mypic.jpg"

function About() {
  return (
    <div className='about'>
      <main>
        <h1>Ifeoma Ezeoke</h1>
        <h2>Frontend Developer</h2>
      </main>
      <div className='content'>
        <div>
          <img className='aboutImg' src={pic} alt="My profile pic" />
        </div>

        <div className='description'>
          <p>

            I am a frontend developer who lives in London, United Kingdom.
            I am passionate about my aquired skill and look forward to what the future holds in the industry.

            So far, I have developed skills in the basics of frontend language as well as adding some frameworks and library to my stack.
          </p>
          <p>
            I am a disciplined professional who is quick to learn and able to adapt to a variety of environment.

            Since I discovered my passion for coding months ago, I have dedicated a lot of time to it and work hard daily to improve my proficiency.
            I love what I do and I am willing to dedicate more time to learn and achieve my goal in the tech industry.
          </p>
        </div>

      </div>



    </div>


  )


}


export default About;