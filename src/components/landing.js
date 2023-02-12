import homepic from '../pages/images/Home.png'

function Landing(){
    return(
       <main className='Landing'>
          <img className='homepic' src={homepic} alt='home page pic' />
       </main>
    )
}

export default Landing;