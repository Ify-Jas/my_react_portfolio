import json from '../project.json'
import pic1 from './images/teamprofile.png'
import pic2 from './images/readmefile.png'
import pic3 from './images/weather-app.png'
import pic4 from './images/day-planner-image.png'
import pic5 from './images/passwordgenerator.png'
import pic6 from './images/recipedia.png'






function Portfolio(){
    const data = json.projects;
    const pics = [pic1, pic2, pic3, pic4, pic5, pic6];
    const myCard = document.getElementsByClassName('eachCard');
    const myPic = document.getElementsByClassName('img');
  

    return(
      <div className='mainPort'>
          <div className='eachCard'>
              {data.map((data, index) => (
              

              
             <div className='info' key={index}>
                 <h3>{data.title}</h3>
                 <p>{data.description}</p>
                 <a target='_blank'  href={data.repo}>Github Repo</a>
                 <a target='_blank' href={data.page}>Deployed Page</a>
                 <p>Skills: {data.tech}</p>
                 <img className='img' src={pics[index]} key={index} alt='image of the project'/>

                 
             </div>
             
              ))}
            
            
           </div>
      </div>
    )
    
    
    
    // return(
    //     <div className='mainPort'>
    //       {data.map((data, index) => (

        
    //         <div className='eachCard' key={index}>

    //           <img className='img' src={data[6]} alt='image of the project'/>


    //           <div className='info'>
    //             <h3>{data.title}</h3>
    //             <p>{data.description}</p>
    //             <a target='_blank'  href={data.repo}>Github Repo</a>
    //             <a target='_blank' href={data.page}>Deployed Page</a>
    //             <p>Skills: {data.tech}</p>
    //           </div>
    //         </div>
    //         ))}
          
    //     </div>
          
    // )
}

export default Portfolio;